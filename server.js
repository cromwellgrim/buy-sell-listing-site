// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieParser = require("cookie-parser");
const Cookies = require('js-cookie')
global.Cookies = require('js-cookie'); //assign module to variable called "Cookies"
Cookies.set('user', 'Baloo');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();
// console.log(db)

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieParser())

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const listingsRoutes = require("./routes/listings_router.js");
const favouriteRoutes = require("./routes/favourites_router.js")
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/listings", listingsRoutes(db));
app.use("/api/favourites", favouriteRoutes(db));

app.get("/", (req, res) => {
  let user = req.cookies.user
  const templateVars = { user: user }
  if (!user) {
  res.render("index", templateVars);
  } else {
    res.render("index", templateVars)
  }
});

app.post("/login", (req, res) => {
  res.cookie("user", req.body.user)
  res.redirect("/")
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

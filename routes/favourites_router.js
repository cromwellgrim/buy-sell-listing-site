const express = require('express');

const { favourites, getFavourites } = require("./favourites.js")


module.exports = function(db) {
  const router = express.Router();

router.get("/", (req, res) => {
  console.log("are we getting here in fav?")
  getFavourites(db)
  .then(favourites => {
    console.log("favourites", favourites)
    res.send(favourites);
  })
})

router.post("/", (req, res) => {
  console.log("are we here in fav post?")
  console.log("body in fav post", req.body)
  let options = req.body;
  favourites(db, options)
  .then(listings => {
    res.send(listings);
  })
})

return router

}

const express = require('express');
const { getListings, getListingsByID } = require('./listings')
const { searchListings } = require('./searchdb')
const { addListings } = require('./addListing')
// const { deleteListing } = require("./deleteListing.js")


module.exports = function(db) {
const router = express.Router();

router.get("/", (req, res) => {
  getListings(db)
    .then(listings => {
      res.send(listings);
    });
});

router.post("/listings", (req, res) => {
  // getListingsByID(db, req.params.id)
  getListings(db)
    .then(listingID => {
      res.send(listingID);
    });
});

router.post("/search", (req, res) => {
  console.log("I got here!")
  let options = req.body
  searchListings(db, options)
  .then(listings => {
    res.send({listings});
  });
});

router.post("/", (req, res) => {
  let options = req.body
    addListings(db, options)
    .then(listings => {
      res.send({listings});
    });
    res.redirect("/");
});

// router.post("/listings/delete", (req, res) => {
//   console.log("listings", listings)
//   console.log("delete for req.body?", req.body)
//   delete deleteListing(db, options)
//   res.redirect('/');
// });

return router
}

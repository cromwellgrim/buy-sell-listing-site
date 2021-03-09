const express = require('express');
const { getListings, getListingsByID } = require('./listings')
const { searchListings } = require('./searchdb')


module.exports = function(db) {
const router = express.Router();

router.get("/", (req, res) => {
  getListings(db)
    .then(listings => {
      res.send(listings);
    });
});
router.get("/", (req, res) => {
  getListingsByID(db, req.params.id)
    .then(listingID => {
      res.send(listingID);
    });
});
router.get("/listings", (req, res) => {
  searchListings(db, req.params.id)
  .then(listings => {
    res.render("searchlistings");
  });
});
return router
}

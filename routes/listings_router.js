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

router.post("/", (req, res) => {
  console.log("req.body is here", req.body)
let options = req.body
  searchListings(db, options)
  .then(listings => {
    console.log("lisitngs is here", listings)
    res.send({listings});
  });
});
return router
}

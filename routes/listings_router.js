const express = require('express');
const { getListings, getListingsByID } = require('./listings')


module.exports = function(db) {
const router = express.Router();

router.get("/", (req, res) => {
  getListings(db)
    .then(listings => {
      res.send({listings});
    });
});
router.get("/", (req, res) => {
  getListingsByID(db, req.params.id)
    .then(listingID => {
      res.send({listingID});
    });
});
return router
}

/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
// const { Pool } = require('pg');
// const dbParams = require('../lib/db.js');
// const db = new Pool(dbParams);
// db.connect();

// const db = require('../lib/db.js');

  const getListings = (db, listings) => {
    const queryString = `
    SELECT *
    FROM listings
    `;
    const queryParams = listings;

   return db.query(queryString, queryParams)
      .then(res => {
        console.log("getListings res rows here", res.rows)
        return res.rows;
      })
      .catch(err => {
        return err;
      });
  };

  const getListingsByID = (db, listingID) => {
    const queryString = `
    SELECT *
    FROM listings
    WHERE listings.id = $1
    `;
    const queryParams = listingID;

    return db.query(queryString, queryParams)
       .then(res => {
         console.log("getListingsByID rows here", res.rows)
         return res.rows;
       })
       .catch(err => {
        return err;
       });
   };

   module.exports = {getListings, getListingsByID}

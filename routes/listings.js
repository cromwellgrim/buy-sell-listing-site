
  const getListings = (db, listings) => {
    const queryString = `
    SELECT  users.id AS user_id, name, listings.id AS listing_id, title, description, price, thumbnail_photo, year, make, model
    FROM listings
    JOIN users ON users.id = listings.seller_id
    `;
    const queryParams = listings;

   return db.query(queryString, queryParams)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        return err;
      });
  };

  const getListingsByID = (db, listingID) => {
    console.log("getListingsByID function is here!")
    const queryString = `
    SELECT *
    FROM listings
    JOIN users ON users.id = listings.seller_id
    WHERE seller_id = $1
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

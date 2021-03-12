/* SQL inserts new listing into the listings table in the database */
const addListings = function(db, listings) {

  const queryString = `
  INSERT INTO listings (seller_id, title, description, price, thumbnail_photo, year, make, model)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;
  `;

  const queryParams = [listings.seller_id, listings.title, listings.description, listings.price, listings.thumbnail_photo, listings.year, listings.make, listings.model]

  return db.query(queryString, queryParams)
  .then((res) => {
    return res.rows[0]})
  .catch((err) => {
    console.log("err", err)
    return null});

}

exports.addListings = addListings;

const addListings = function(db, listings) {
  // console.log("listings in addListings", listings)
  const queryString = `
  INSERT INTO listings (seller_id, title, description, price, thumbnail_photo, year, make, model)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;
  `;

  const queryParams = [listings.seller_id, listings.title, listings.description, listings.price, listings.thumbnail_photo, listings.year, listings.make, listings.model]
  // console.log("listings post SQL", listings)
  return db.query(queryString, queryParams)
  .then((res) => {
    console.log("res in then", res)
    return res.rows[0]})
  .catch((err) => {
    console.log("err", err)
    return null});

}

exports.addListings = addListings;

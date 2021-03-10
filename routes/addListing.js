const addListings = function(listings) {

  const queryString = `
  INSERT INTO listings (seller_id, title, description, price, thumbnail_photo, year, make, model)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  RETURNING *;
  `;

  const queryParams = [listings.seller_id, listings.title, listings.description, listings.price, listings.thumbnail_photo, listings.year, listings.make, listings.model]

  return pool.query(queryString, queryParams)
  .then(res => res.rows[0])
  .catch(err => null);

}

exports.addListings = addListings;

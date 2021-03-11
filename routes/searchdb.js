/* Searches through listings according to given parameters */
const searchListings = function (db, options, limit = 8) {
  const queryParams = [];
  let queryString = `
  SELECT *
  FROM listings
  JOIN users ON users.id = listings.seller_id
  WHERE 1 = 1
  `;
  if(options.min_price) {
    queryParams.push(`${options.min_price}`);
    queryString += `AND price >= $${queryParams.length}`;
  }

  if(options.max_price) {
    queryParams.push(`${options.max_price}`);
    queryString += `AND price <= $${queryParams.length}`;
  }

  if(options.make) {
    queryParams.push(`%${options.make}%`);
    queryString += `AND make ILIKE $${queryParams.length}`;
  }

  if(options.model) {
    queryParams.push(`%${options.model}%`);
    queryString += `AND model ILIKE $${queryParams.length}`;
  }

  queryParams.push(limit);
  queryString += `
  GROUP BY listings.id, users.id
  ORDER BY price ASC
  LIMIT $${queryParams.length};
  `;

  return db.query(queryString, queryParams)
  .then(res => res.rows)
  .catch(err => console.log(err.stack));

}
exports.searchListings = searchListings;

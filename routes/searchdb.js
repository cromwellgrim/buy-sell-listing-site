

const searchListings = function (options, limit = 8) {
  const queryParams = [];
  let queryString = `
  SELECT listings.*
  FROM listings
  `;
  if(options.price) {
    queryParams.push(`%${options.price}%`);
    queryString += `WHERE price >= $${queryParams.length}`;
  }

  if(options.price) {
    queryParams.push(`${options.price}`);
    queryString += `AND price <= $${queryParams.length}`;
  }

  if(options.make) {
    queryParams.push(`${options.make}`);
    queryString += `AND make ILIKE $${queryParams.length}`;
  }

  if(options.model) {
    queryParams.push(`${options.model}`);
    queryString += `AND model ILIKE $${queryParams.length}`;
  }

  queryParams.push(limit);
  queryString += `
  GROUP BY listings.id
  ORDER BY price
  LIMIT $${queryParams.length};
  `;

  return db.query(queryString, queryParams)
  .then(res => res.rows)
  .catch(err => console.log(err.stack));

}
exports.searchListings = searchListings;

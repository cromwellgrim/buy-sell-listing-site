/* SQL inserts new favourited listings into the favourites table in the database */
const favourites = function(db, favourites) {

  const queryString = `
  INSERT INTO favourites (user_id, listing_id)
  VALUES ($1, $2)
  RETURNING *;
  `;

  const queryParams = [favourites.user_id, favourites.listing_id]

  return db.query(queryString, queryParams)
  .then((res) => {
    return res.rows[0]})
  .catch((err) => {
    console.log("err", err)
    return null});

}

exports.favourites = favourites;

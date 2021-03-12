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


const getFavourites = (db, favourites) => {
  const queryString = `
  SELECT  *
  FROM favourites
  JOIN listings ON listings.id = favourites.listing_id
  JOIN users ON users.id = favourites.user_id
  WHERE favourites.listing_id = listings.id
  GROUP BY favourites.id, listings.id, users.id
  `;
  const queryParams = favourites;

 return db.query(queryString, queryParams)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      return err;
    });
};
module.exports = { favourites, getFavourites }

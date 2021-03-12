const deleteListing = function(db, listingID) {
const queryString = `
  DELETE FROM listings WHERE listings.id = $1
  `
  const queryParams = listingID;
  
  console.log("delete pre-db.query")
  return db.query(queryString, queryParams)
  .then(res => {
    console.log("goodbye listing", res.rows)
    return res.rows;
})
  .catch(err => {
    return err;
  });
};
module.exports = { deleteListing }

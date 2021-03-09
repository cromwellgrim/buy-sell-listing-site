/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
// const { Pool } = require('pg');
// const dbParams = require('../lib/db.js');
// const db = new Pool(dbParams);
// db.connect();

// const db = require('../lib/db.js');

  const getUsers = (db, users) => {
    const queryString = `
    SELECT users.*, listings.*
    FROM users
    JOIN listings ON listings.seller_id = users.id
    `;
    const queryParams = users;


   return db.query(queryString, queryParams)
      .then(res => {
      console.log("users res rows here", res.rows)
        return res.rows;
      })
      .catch(err => {
        console.log("getUsers", err)
          return err;
      });
  };

  const getUsersByID = (db, usersID) => {
    const queryString = `
    SELECT *
    FROM users
    WHERE users.id = $1
    `;

    const queryParams = usersID;

    return db.query(queryString, queryParams)
       .then(res => {
         console.log("ID rows here", res.rows)
         return res.rows;
       })
       .catch(err => {
        console.log("getUsersByID", err)
          return err;
       });
   };


module.exports = {getUsers, getUsersByID}

// router.post("/:id", (req, res) => {
//   /* post that inserts favourite listings */
// });
// router.post("/:id", (req, res) => {
//   /* post that completes search */
// });
// router.get("/:id", (req, res) => {})

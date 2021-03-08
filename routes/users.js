/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // console.log("res", res.rows)
   db.query(`SELECT * FROM users WHERE users.id=1;`)
      .then(data => {
        console.log("res rows here", data.rows)
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        console.log("res rows in catch is here", res.rows)
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

// router.post("/:id", (req, res) => {
//   /* post that inserts favourite listings */
// });
// router.post("/:id", (req, res) => {
//   /* post that completes search */
// });
// router.get("/:id", (req, res) => {})

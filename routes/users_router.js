const express = require('express');

const { getUsers, getUsersByID } = require('./users')


module.exports = function(db) {
const router = express.Router();

router.get("/", (req, res) => {
  getUsers(db)
    .then(users => {
      res.send(users);
    });
});

router.get("/:id/users", (req, res) => {
  getUsersByID(db, req.params.id)
    .then((usersID) => {
      res.send(usersID);
    });
});

return router
}



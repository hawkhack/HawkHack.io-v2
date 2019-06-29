const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/stats", (req, res) => {
  let response = {};
  User.countDocuments()
    .then(result => {
      response.numusers = result;
      response.updated = true;
    })
    .then(() => {
      User.countDocuments({ status: "Degistered" })
        .then(result => {
          response.numregistered = result;
        })
        .then(() => {
          User.countDocuments({ role: "Participant" })
            .then(result => {
              response.numparticipants = result;
            })
            .then(() => {
              res.status(200).json(response);
            });
        });
    });
});

module.exports = router;

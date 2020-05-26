const express = require("express");
const {
  test
} = require('../controllers').userController;
const router = express.Router({ mergeParams: true });

router.get("/test", test);

module.exports = router;
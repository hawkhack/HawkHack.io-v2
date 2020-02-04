"use strict";
const path = require("path");
const fs = require("fs");

module.exports = () => {
  const raw = fs.readFileSync(path.join(__dirname + "/defaults.json"));
  const data = JSON.parse(raw);
  return data;
};

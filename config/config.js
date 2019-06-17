const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: path.resolve(__dirname, "./", ".config")});
module.exports = {
  port: process.env.PORT,
  dburi: process.env.DBURI,
  secretOrKey: process.env.SecretOrKey
};
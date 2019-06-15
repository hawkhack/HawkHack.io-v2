const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const {port, dburi} = require('./config/config');

const app = express();

mongoose
  .connect(
    dburi,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => console.log(err));


app.get('/', (req, res)=>{
    res.status(200).json("reached home");
});

app.listen(port ,()=>{
    console.log(`Server listening on port ${port}`);
});
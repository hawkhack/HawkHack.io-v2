const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { port, dburi } = require('./config/config');
const passport = require("passport");
const path = require('path');

const app = express();

const users = require('./routes/api/user');
const profile = require('./routes/api/profile');
const admin = require('./routes/api/admin');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    dburi,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => console.log(err));
mongoose.set('useFindAndModify', false);


//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/u", users);
app.use("/api/p", profile);
app.use("/api/a", admin);

// app.get('/', (req, res)=>{
//   res.status(200).json("reached home");
// });

app.get('*', (req, res) => {
  console.log("OH YEAH")
  res.sendFile(path.resolve(`${__dirname}/client/public/index.html`));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
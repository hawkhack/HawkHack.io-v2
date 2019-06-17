const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  firstName:{
    type: String,
    max: 20
  },
  lastName:{
    type: String,
    max:20
  },
  email:{
    type: String
  },
  phoneNumber:{
    type: String,
    max: 12
  },
  dateOfBirth:{
    type: Date
  },
  shirtSize:{
    type: String,
    enum:['XXS','XS','S','M','L','XL','XXL']
  },
  gender:{
    type: String,
    max: 20
  },
  ethnicity:{
    type: String,
    max:20
  },
  github:{
    type: String
  },
  linkedin:{
    type: String
  },
  website:{
    type: String
  },
  school:{
    type: String,
    max: 30
  },
  graduationYear:{
    type: String,
    max:4
  },
  levelOfStudy:{
    type: String,
    enum:['Undergraduate', 'Graduate', 'High School']
  },
  major:{
    type: String,
    max:30
  },
  dietaryRestrictions:{
    type: String,
    default: "None",
    max: 200
  },
  specialNeeds:{
    type: String,
    default: "None",
    max:200
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
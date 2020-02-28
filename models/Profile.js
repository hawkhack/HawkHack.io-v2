const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  status: {
    type: String,
    enum: ["Incomplete", "Pending", "Waitlisted", "Accepted", "Confirmed", "Denied"],
    default: "Incomplete"
  },
  statusChangedAt: {
    type: Date
  },
  confirmationToken: {
    type: String
  },
  firstName: {
    type: String,
    max: 20
  },
  lastName: {
    type: String,
    max: 20
  },
  email: {
    type: String,
    ref: "users"
  },
  phoneNumber: {
    type: String,
    max: 12
  },
  dateOfBirth: {
    type: Date
  },
  resume: {
    name: {
      type: String
    },
    key: {
      type: String
    }
  },
  shirtSize: {
    type: String,
    enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "Not set"],
    default: "Not set"
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "Prefer not to say", "Not set"],
    default: "Not set"
  },
  ethnicity: {
    type: String,
    max: 50
  },
  github: {
    type: String
  },
  linkedin: {
    type: String
  },
  website: {
    type: String
  },
  school: {
    type: String,
    max: 30
  },
  graduationYear: {
    type: String,
    max: 4
  },
  levelOfStudy: {
    type: String,
    enum: ["Undergraduate", "Graduate", "High School", "Not set"],
    default: "Not set"
  },
  major: [String],
  dietaryRestrictions: {
    type: String,
    default: "None",
    max: 200
  },
  specialNeeds: {
    type: String,
    default: "None",
    max: 200
  },
  heardFrom: {
    type: String,
    max: 50
  },
  emergencyName: {
    type: String,
    max: 20
  },
  emergencyNumber: {
    type: String,
    max: 20
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);

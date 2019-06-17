const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
      type: String,
      enum: ['Participant', 'Organizer', 'Volunteer', 'Director', 'Administrator'],
      default: 'Participant'
  },
  status:{
    type: String,
    enum: ['Incomplete', 'Registered', 'Waitlisted', 'Accepted', 'Confirmed', 'Denied'],
    default: 'Incomplete'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
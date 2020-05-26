const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    validate: () => {
      if (this.firstName.length < 2 || this.firstName.length > 20) Promise.reject(new Error("First Name must be between 2 and 20 characters"));
    }
  },
  lastName: {
    type: String,
    required: true,
    validate: () => {
      if (this.lastName.length < 2 || this.lastName.length > 20) Promise.reject(new Error("Last Name must be between 2 and 20 characters"));
    }
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  verified: {
    type: Boolean,
    default: false
  },
  /*Roles:
  * 1 - Administrator
  * 2 - Director
  * 3 - Organizer
  * 4 - Volunteer
  * 5 - Participant
  */
  role: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);

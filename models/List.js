const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ListSchema = new Schema({
  name: {
    type: String
  },
  users: [
    {
      user: { type: Schema.Types.ObjectId, ref: "users" },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = List = mongoose.model("list", ListSchema);

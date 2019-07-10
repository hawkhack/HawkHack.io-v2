const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const EventSchema = new Schema({
  name: {
    type: String
  },
  dates: {
    type: String
  },
  startTime:{
      type: Date
  },
  school:{
      type: String,
  },
  location:{
      type: String
  },
  status:{
    type: String,
    enum: ['Closed', 'Open'],
    default: 'Closed'
  },
  schedule:{
      event:[{
          name:{
              type: String,
              required: true
          },
          time:{
              type: String,
              required: true
          },
          location:{
              type: String,
              required: true
          }
      }]
  }
});

module.exports = Event = mongoose.model("event", EventSchema);
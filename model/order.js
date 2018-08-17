const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderShema = new Shema({
  date: {
    type: Date,
    default: Date.now
  },
  order: {
    type: Number,
    require: true
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId
  },
  list: [
    {
      name: {
        type: String
      },
      quantity: {
        type: Number
      },
      cost: {
        type: Number
      }
    }
  ]
});

module.exports = mongoose.model("orders", orderShema);
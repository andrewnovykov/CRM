const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const positionShema = new Shema({
  name: {
    type: String,
    require: true
  },
  cost: {
    type: Number,
    require: true
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  category: {
    ref: "categories",
    type: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model("positions", positionShema);
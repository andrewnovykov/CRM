const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userShema = new Shema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("users", userShema);
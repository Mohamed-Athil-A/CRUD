const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  gender: String,
  status: String, // active/inactive
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  oid: { type: String, required: true },
  displayName: String,
  email: String,
});

module.exports = mongoose.model('User', userSchema);

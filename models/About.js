const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, default: '' }
});

module.exports = mongoose.model('About', aboutSchema);
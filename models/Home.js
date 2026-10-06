const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  buttonText: { type: String, default: '' },
  buttonLink: { type: String, default: '' }
});

module.exports = mongoose.model('Home', homeSchema);
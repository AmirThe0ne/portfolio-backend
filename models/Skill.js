const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, min: 0, max: 100, default: 50 },
  icon: { type: String, default: '' },
});

module.exports = mongoose.model('Skill', skillSchema);
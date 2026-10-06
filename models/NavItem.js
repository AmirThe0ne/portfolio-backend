const mongoose = require('mongoose');

const navItemSchema = new mongoose.Schema({
  label: { type: String, required: true },
  path: { type: String, required: true },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('NavItem', navItemSchema);
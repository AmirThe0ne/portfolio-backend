const express = require('express');
const router = express.Router();
const NavItem = require('../models/NavItem');

router.get('/', async (req, res) => {
  const items = await NavItem.find().sort('order');
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await NavItem.create(req.body);
  res.status(201).json(item);
});

router.put('/:id', async (req, res) => {
  const item = await NavItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await NavItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
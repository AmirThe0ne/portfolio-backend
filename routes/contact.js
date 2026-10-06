const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
  try {
    res.json(await Contact.find().sort({ createdAt: -1 }));
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const msg = await Contact.create(req.body);
    res.status(201).json(msg);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const msg = await Contact.findByIdAndDelete(req.params.id);
    if (!msg) return res.status(404).json({ message: 'Message not found' });
    res.json({ message: 'Message deleted' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const About = require('../models/About');

router.get('/', async (req, res) => {
  const about = await About.findOne();
  res.json(about);
});


router.post('/', async (req, res) => {
  res.status(201).json(await About.create(req.body));
});

router.put('/:id', async (req, res) => {
  res.json(await About.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }));
});

router.delete('/:id', async (req, res) => {
  await About.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
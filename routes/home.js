const express = require('express');
const router = express.Router();
const Home = require('../models/Home');

router.get('/', async (req, res) => {
  res.json(await Home.find());
});

router.post('/', async (req, res) => {
  res.status(201).json(await Home.create(req.body));
});

router.put('/:id', async (req, res) => {
  res.json(await Home.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }));
});

router.delete('/:id', async (req, res) => {
  await Home.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Project = require('../models/Projects');
router.get('/', async (req, res) => {
  res.json(await Project.find());
});

router.post('/', async (req, res) => {
  res.status(201).json(await Project.create(req.body));
});

router.put('/:id', async (req, res) => {
  res.json(await Project.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }));
});

router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/navbar', require('./routes/navbar'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/home', require('./routes/home'));
app.use('/api/about', require('./routes/about'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error('DB error:', err));
// server/routes/api.js
const express = require('express');
const router = express.Router();
const myModel = require('../models/gifGenerator');

// Example API endpoint
router.post('/predict', (req, res) => {
  const inputData = req.body;
  const prediction = myModel.predict(inputData);
  res.json(prediction);
});

module.exports = router;

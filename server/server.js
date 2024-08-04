// server/server.js
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the API routes
app.use('/api', apiRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catchall handler to serve the React app for any request not handled above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

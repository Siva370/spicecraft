const express = require('express');
const path = require('path');
const app = express();

// Serve static files from client folder
app.use(express.static(path.join(__dirname, '../client')));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
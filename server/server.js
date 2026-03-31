const express = require('express');
const path = require('path');

const app = express();

// Serve static files from client folder
app.use(express.static(path.join(__dirname, '../client')));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Dynamic port (IMPORTANT for Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../client')));

// Fake database (in memory)
let orders = [];

// API to save order
app.post('/order', (req, res) => {
  const { user, cart } = req.body;

  if (!user || !cart || cart.length === 0) {
    return res.status(400).json({ message: 'Invalid order' });
  }

  orders.push({ user, cart });

  console.log("🧾 New Order:", { user, cart });

  res.json({ message: '🎉 Order placed successfully!' });
});

// Home route (important for Render)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});

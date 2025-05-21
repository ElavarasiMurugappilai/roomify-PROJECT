const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load variables from .env

const app = express();

// 🔐 Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON

// 🔗 Routes
const requestRoutes = require('./routes/requestRoutes');
app.use('/api/requests', requestRoutes);

// 🧠 Test Route
app.get('/', (req, res) => {
  res.send('🎉 Roomify API is running!');
});

// 🔌 Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('✅ MongoDB Connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });


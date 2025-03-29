// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const mealRoutes = require('./routes/meals');
const workoutRoutes = require('./routes/workouts');

app.use('/api/meals', mealRoutes);
app.use('/api/workouts', workoutRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
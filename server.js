require('@babel/register')({
    extensions: ['.js', '.jsx']
  });
  require('dotenv').config();
  require('./server.js');
  
  const express = require('express');
  const cors = require('cors');
  
  const app = express();
  const PORT = process.env.PORT || 5001;
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  
  // Routes
  const mealRoutes = require('./routes/meals.js');
  const workoutRoutes = require('./routes/workouts.js');
  
  app.use('/api/meals', mealRoutes);
  app.use('/api/workouts', workoutRoutes);
  
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });
  
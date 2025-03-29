const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const workouts = {
  'weight-loss': [
    { name: 'HIIT', description: 'High-Intensity Interval Training to burn fat' },
    { name: 'Cardio', description: 'Running, cycling, or swimming to burn calories' },
    { name: 'Full Body Circuit', description: 'Total body exercises to keep the heart rate high' }
  ],
  'strength-building': [
    { name: 'Strength Training', description: 'Focus on weights and resistance training' },
    { name: 'Powerlifting', description: 'Focus on lifting maximal weights' },
    { name: 'Muscle Building', description: 'Training with moderate weights and higher reps' }
  ],
  'flexibility': [
    { name: 'Yoga', description: 'Poses to increase flexibility and core strength' },
    { name: 'Pilates', description: 'Core strengthening and flexibility exercises' },
    { name: 'Stretching', description: 'Static and dynamic stretches for flexibility' }
  ]
};

app.post('/api/getWorkouts', (req, res) => {
  const { goal } = req.body;

  if (!goal) {
    return res.status(400).json({ message: 'Goal is required' });
  }

  if (!workouts[goal]) {
    return res.status(404).json({ message: 'No workouts found for this goal' });
  }

  const selectedWorkouts = workouts[goal].slice(0, 2); // Get first two workouts
  return res.json({ workouts: selectedWorkouts });
});

app.listen(port, () => {
  console.log(`Workout API is running on http://localhost:${port}`);
});

// backend/routes/workouts.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
            headers: {
                'X-RapidAPI-Key': process.env.EXERCISEDB_API_KEY,  // Your API key
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'  // ExerciseDB host header
            }
        });
        res.json(response.data);  // Send the data as JSON response
    } catch (error) {
        console.error('Error fetching workouts:', error);
        res.status(500).json({ error: 'Error fetching workouts' });
    }
});

module.exports = router;

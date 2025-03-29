// backend/routes/meals.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.spoonacular.com/mealplanner/generate', {
            params: {
                timeFrame: 'day',
                apiKey: process.env.SPOONACULAR_API_KEY // Use your API key from Spoonacular
            }
        });
        res.json(response.data); // Send the data as JSON response
    } catch (error) {
        console.error('Error fetching meal plan:', error);
        res.status(500).json({ error: 'Error fetching meal plan' });
    }
});

module.exports = router;

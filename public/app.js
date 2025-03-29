document.addEventListener('DOMContentLoaded', () => {
    loadWorkouts();
    loadNutrition();
    loadRecovery();
});

// Fetch and display workout data
function loadWorkouts() {
    fetch('/api/workouts')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.workout-container');
            container.innerHTML = ''; // Clear existing content
            data.forEach(workout => {
                const element = document.createElement('div');
                element.classList.add('workout-item');
                element.innerHTML = `
                    <h3>${workout.name}</h3>
                    <p>${workout.description}</p>
                `;
                container.appendChild(element);
            });
        })
        .catch(error => console.error('Error fetching workouts:', error));
}

// Fetch and display nutrition data
function loadNutrition() {
    fetch('/api/meals')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.nutrition-container');
            container.innerHTML = '';
            data.forEach(meal => {
                const element = document.createElement('div');
                element.classList.add('nutrition-item');
                element.innerHTML = `
                    <h3>${meal.name}</h3>
                    <p>${meal.description}</p>
                `;
                container.appendChild(element);
            });
        })
        .catch(error => console.error('Error fetching nutrition:', error));
}

// Fetch and display recovery tips
function loadRecovery() {
    fetch('/api/recovery')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.recovery-container');
            container.innerHTML = '';
            data.forEach(tip => {
                const element = document.createElement('div');
                element.classList.add('recovery-item');
                element.innerHTML = `
                    <h3>${tip.title}</h3>
                    <p>${tip.description}</p>
                `;
                container.appendChild(element);
            });
        })
        .catch(error => console.error('Error fetching recovery tips:', error));
}
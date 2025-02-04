// Replace 'YOUR_API_KEY' with your actual Spoonacular API key
const API_KEY = '972a51fa3b1e4e0e9e8d7baeb4deb35a';
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + API_KEY;

async function fetchRecipes() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Display the recipes on the page
        const recipesContainer = document.getElementById('recipes');
        data.results.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <h3>${recipe.title}</h3>
                <img src="${recipe.image}" alt="${recipe.title}" style="width: 100px; height: auto;">
                <p>Recipe ID: ${recipe.id}</p>
            `;
            recipesContainer.appendChild(recipeDiv);
        });
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

// Call the function to fetch recipes when the page loads
window.onload = fetchRecipes;
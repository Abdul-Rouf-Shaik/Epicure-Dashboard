const express = require('express');
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const router = express.Router();

// Get all recipes for a specific machine
router.get('/:machineId', getRecipes);

// Create a new recipe for a specific machine
router.post('/:machineId', createRecipe);

// Update an existing recipe by ID
router.put('/:id', updateRecipe);

// Delete a recipe by ID
router.delete('/:id', deleteRecipe);

module.exports = router;

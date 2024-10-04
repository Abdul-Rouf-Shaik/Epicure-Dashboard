const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ ingredient: String, quantity: String }],
  machine: { type: mongoose.Schema.Types.ObjectId, ref: 'Machine' }
});

module.exports = mongoose.model('Recipe', recipeSchema);

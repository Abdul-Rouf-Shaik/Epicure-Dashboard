const mongoose = require('mongoose');

const dispenserSchema = new mongoose.Schema({
  ingredient: { type: String, required: true },
  quantity: { type: String, required: true },
  machine: { type: mongoose.Schema.Types.ObjectId, ref: 'Machine' }
});

module.exports = mongoose.model('Dispenser', dispenserSchema);

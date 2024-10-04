const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sensorStatus: { type: String, required: true },
  dispensers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dispenser' }],
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  temperature: {type: String}
});

module.exports = mongoose.model('Machine', machineSchema);

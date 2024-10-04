const Machine = require('../models/Machine');

exports.getMachines = async (req, res) => {
  try {
    const machines = await Machine.find().populate('dispensers recipes');
    res.json(machines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMachine = async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id).populate('dispensers recipes');
    if (!machine) return res.status(404).json({ error: 'Machine not found' });
    res.json(machine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMachine = async (req, res) => {
  try {
    const { name, sensorStatus } = req.body;
    const machine = new Machine({ name, sensorStatus });
    await machine.save();
    res.status(201).json(machine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

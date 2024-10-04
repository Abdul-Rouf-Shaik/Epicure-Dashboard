const Dispenser = require('../models/Dispenser');
const Machine = require('../models/Machine');
const mongoose = require("mongoose");

exports.getDispensers = async (req, res) => {
  try {
    console.log(req.params.machineId)
    const dispensers = await Dispenser.find({ machine: req.params.machineId });
    console.log(dispensers);
    res.json(dispensers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

exports.createDispenser = async (req, res) => {
  try {
    const { ingredient, quantity } = req.body;
    const dispenser = new Dispenser({ ingredient, quantity, machine: req.params.machineId });
    await dispenser.save();
    res.status(201).json(dispenser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDispenser = async (req, res) => {
  try {
    const dispenser = await Dispenser.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dispenser) return res.status(404).json({ error: 'Dispenser not found' });
    res.json(dispenser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDispenser = async (req, res) => {
  try {
    const dispenser = await Dispenser.findByIdAndDelete(req.params.id);
    if (!dispenser) return res.status(404).json({ error: 'Dispenser not found' });
    res.json({ message: 'Dispenser deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require('express');
const { getDispensers, createDispenser, updateDispenser, deleteDispenser } = require('../controllers/dispenserController');
const router = express.Router();

router.get('/:machineId', getDispensers);
router.post('/:machineId', createDispenser);
router.put('/:id', updateDispenser);
router.delete('/:id', deleteDispenser);

module.exports = router;


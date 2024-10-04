const express = require('express');
const { getMachines, getMachine, createMachine } = require('../controllers/machineController');
const router = express.Router();

router.get('/', getMachines);
router.get('/:id', getMachine);
router.post('/', createMachine);

module.exports = router;

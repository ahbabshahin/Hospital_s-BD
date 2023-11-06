const express = require('express');
const router = express.Router();

const {
	getAllAmbulance,
	getSingleAmbulance,
	createAmbulance,
	updateAmbulance,
	deleteAmbulance,
} = require('../controllers/ambulanceController');

router.route('/:hId').get(getAllAmbulance).post(createAmbulance);
router
	.route('/:hId/:id')
	.get(getSingleAmbulance)
	.put(updateAmbulance)
	.delete(deleteAmbulance);

module.exports = router;

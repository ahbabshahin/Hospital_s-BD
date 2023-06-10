const express = require('express');
const router = express.Router();

const {
	getAllHospitals,
	createHospital,
	getSingleHospital,
	updateHospital,
	deleteHospital,
} = require('../controllers/inventoryController');

router.route('/').get(getAllHospitals).post(createHospital);
router
	.route('/:id')
	.get(getSingleHospital)
	.put(updateHospital)
	.delete(deleteHospital);

module.exports = router;

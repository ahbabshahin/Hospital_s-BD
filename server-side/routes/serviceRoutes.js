const express = require('express');
const router = express.Router();

const {
	getAllServices,
	createService,
	getSingleService,
	updateService,
	deleteServices,
} = require('../controllers/serviceController');

router
	.route('/:id')
	.get(getAllServices)
	.post(createService)
	.put(updateService)
	.delete(deleteServices);
router.route('/get/:id').get(getSingleService);

module.exports = router;

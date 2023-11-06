const express = require('express');
const router = express.Router();

const {
	getAllInfo,
	createInfo,
	getSingleInfo,
	updateInfo,
	deleteInfo,
} = require('../controllers/doctorsInfoController');

router
	.route('/:id')
	.get(getAllInfo)
	.post(createInfo)
	.put(updateInfo)
	.delete(deleteInfo);
router.route('/get/:id').get(getSingleInfo);

module.exports = router;

const express = require('express');
const router = express.Router();

const {
	getAllInfo,
	getSingleInfo,
	createInfo,
	updateInfo,
	deleteInfo,
} = require('../controllers/bloodBankController');

router.route('/:hId').get(getAllInfo).post(createInfo);
router.route('/:hId/:id').get(getSingleInfo).put(updateInfo).delete(deleteInfo);

module.exports = router;

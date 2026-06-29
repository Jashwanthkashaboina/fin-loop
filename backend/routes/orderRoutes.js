const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/orderController');
const { verifyToken } = require('../middleware');

// Enable verifyToken before production
router.post('/', placeOrder);
// router.post('/', verifyToken, placeOrder);



module.exports = router;
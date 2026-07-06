const express = require('express');
const router = express.Router();
const { placeOrder, sellOrder, getOrders } = require('../controllers/orderController');
const { verifyToken } = require('../middleware');

router.get('/', verifyToken, getOrders);
router.post('/buy', verifyToken, placeOrder);
router.post('/sell', verifyToken, sellOrder);


module.exports = router;
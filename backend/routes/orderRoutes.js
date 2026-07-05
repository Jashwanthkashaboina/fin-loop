const express = require('express');
const router = express.Router();
const { placeOrder, sellOrder } = require('../controllers/orderController');
const { verifyToken } = require('../middleware');

// === Enable verifyToken before production === //
router.post('/buy', verifyToken, placeOrder);
router.post("/sell", verifyToken, sellOrder);


// router.post('/buy', placeOrder);
// router.post('/sell', sellOrder);



module.exports = router;
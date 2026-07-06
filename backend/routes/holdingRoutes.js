const express = require('express');
const router = express.Router();
const { getAllHoldings } = require('../controllers/holdingController');
const { verifyToken } = require('../middleware');

// Development
// router.get("/", getAllHoldings);

// Production
router.get("/", verifyToken, getAllHoldings);

module.exports = router;
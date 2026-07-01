const express = require('express');
const router = express.Router();
const { getAllHoldings } = require('../controllers/holdingController');

// Development
router.get("/", getAllHoldings);

// Production
// router.get("/", verifyToken, getAllHoldings);

module.exports = router;
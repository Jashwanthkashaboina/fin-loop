const express = require("express");
const router = express.Router();
const { getWatchlist } = require("../controllers/watchlistController");
const verifyToken = require('../middleware');

// Development
// router.get("/", getWatchlist);

// Production
router.get("/", verifyToken, getWatchlist);

module.exports = router;
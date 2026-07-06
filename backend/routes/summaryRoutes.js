const express = require('express');
const router = express.Router();
const { getSummary } = require('../controllers/summaryController');
const { verifyToken } = require('../middleware');


router.get('/', verifyToken, getSummary);


module.exports = router;

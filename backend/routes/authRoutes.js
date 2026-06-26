const express = require('express');
const router = express.Router();
const { signUp, login, getUsers, getUserById, getCurrentUser } = require('../controllers/authController.js');
const { verifyToken } = require('../middleware.js');


// signUp
router.post("/signup", signUp);

// login
router.post('/login', login);

// GET users
router.get("/", verifyToken, getUsers);

// GET users/:id
router.get("/:id", verifyToken, getUserById);

router.get('/me', verifyToken, getCurrentUser);

module.exports = router;
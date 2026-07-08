const express = require('express');
const router = express.Router();
const { signUp, login, getUsers, getUserById, getCurrentUser, getProfile } = require('../controllers/authController.js');
const { verifyToken } = require('../middleware.js');


// signUp
router.post("/signup", signUp);

// login
router.post('/login', login);

// Production
// router.get('/me', verifyToken, getCurrentUser);

// Development
// router.get('/me', getCurrentUser);

router.get('/profile', verifyToken, getProfile);


// GET users
router.get("/", verifyToken, getUsers);

// GET users/:id
router.get("/:id", verifyToken, getUserById);



module.exports = router;
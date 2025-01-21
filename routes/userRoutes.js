const express = require('express');
const { getUserInfo } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, getUserInfo);

module.exports = router;

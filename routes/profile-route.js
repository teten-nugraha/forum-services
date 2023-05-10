const express = require('express');
const { me } = require('../handler/profile-handler');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.get('/me', authMiddleware, me);

module.exports = router;
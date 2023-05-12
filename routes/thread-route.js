const express = require('express');
const { createThread, likeThread } = require('../handler/thread-handler');
const authMiddleware  = require('../middlewares/auth-middleware');
const { route } = require('./profile-route');

const router = express.Router();

router.post('/', authMiddleware, createThread);
router.post('/like/:id', authMiddleware, likeThread);

module.exports = router;
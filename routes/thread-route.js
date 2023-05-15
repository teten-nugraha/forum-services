const express = require('express');
const { createThread, likeThread, commentThread, topThread } = require('../handler/thread-handler');
const authMiddleware  = require('../middlewares/auth-middleware');
const { route } = require('./profile-route');

const router = express.Router();

router.post('/', authMiddleware, createThread);
router.post('/likes/:id', authMiddleware, likeThread);
router.post('/comments/:id', authMiddleware, commentThread);
router.get('/tops', authMiddleware, topThread);

module.exports = router;
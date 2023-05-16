const express = require('express');
const { createThread, likeThread, commentThread, topThread, threads } = require('../handler/thread-handler');
const authMiddleware  = require('../middlewares/auth-middleware');
const { route } = require('./profile-route');

const router = express.Router();

router.post('/', authMiddleware, createThread);
router.post('/likes/:id', authMiddleware, likeThread);
router.post('/comments/:id', authMiddleware, commentThread);
router.get('/tops', authMiddleware, topThread);
router.get('/pagination', authMiddleware, threads);

module.exports = router;
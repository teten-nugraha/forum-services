const express = require('express');
const { createThread } = require('../handler/thread-handler');
const authMiddleware  = require('../middlewares/auth-middleware');
const { route } = require('./profile-route');

const router = express.Router();

router.post('/', authMiddleware, createThread);

module.exports = router;
const express = require('express')
const {
    createThread,
    likeThread,
    commentThread,
    topThread,
    threads,
    getComments,
    getThreadDetail,
    allthreads,
} = require('../handler/thread-handler')
const authMiddleware = require('../middlewares/auth-middleware')

const router = express.Router()

router.get('/all', authMiddleware, allthreads)
router.get('/', authMiddleware, threads)
router.post('/', authMiddleware, createThread)
router.get('/tops', authMiddleware, topThread)
router.get('/:id', authMiddleware, getThreadDetail)
router.post('/likes/:id', authMiddleware, likeThread)
router.post('/comments/:id', authMiddleware, commentThread)
router.get('/comments/:id', authMiddleware, getComments)

module.exports = router

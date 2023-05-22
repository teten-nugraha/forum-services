const comment = require('../models/comment');
const ThreadService = require('../services/thread-service');

const createThread = async (req, res) => {
    try {

        const {title, description} = req.body;
        let userId = await req.user.id;

        const threadSaved = await ThreadService.createThread(title, description, userId);
        
        res.status(201).json({
            success: true,
            data: threadSaved
        });


    }catch(err){
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
};

const likeThread = async (req, res) => {
    try {

        const threadId = await req.params.id;

        let thread = await ThreadService.likeThread(threadId);
        
        res.status(200).json({
            success: true,
            data: thread
        });

    }catch(err){
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
};

const commentThread = async (req, res) => {
    try {
        
        const { comment } =  req.body;
        const threadId = await req.params.id;
        let userId = await req.user.id;

        const newComment = await ThreadService.commentThread(threadId, userId, comment);
        
        res.status(200).json({
            success: true,
            data: newComment
        });



    }catch(err){
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
}

const topThread = async (req, res) => {
    try {

        const topThreads = await ThreadService.getTopThread();
        
        res.status(200).json({
            success: true,
            data: topThreads
        });



    }catch(err){
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
}

const threads = async (req, res) => {
    try {

        const threads = await ThreadService.getThreads(req);
        
        res.status(200).json({
            success: true,
            data: threads
        });



    }catch(err){
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
}

const getComments = async (req, res) => {
    try {
        const threadId = await req.params.id;

        const comments = await ThreadService.getComments(threadId);

        res.status(200).json({
            success: true,
            data: comments
        });
    }catch(err){
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
}

module.exports = {createThread, likeThread, commentThread, topThread, threads, getComments};
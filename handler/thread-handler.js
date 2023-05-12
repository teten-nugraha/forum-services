const comment = require('../models/comment');
const ThreadService = require('../services/thread-service');

const createThread = async (req, res) => {
    try {

        const {title, description} = req.body;
        let userId = await req.user.id;

        const threadSaved = await ThreadService.createThread(title, description, userId);
        
        res.status(200).json({
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

module.exports = {createThread, likeThread, commentThread};
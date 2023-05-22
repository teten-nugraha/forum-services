const Thread = require('../models/thread');
const Comment = require('../models/comment');
const UserService = require('../services/user-service');

async function createThread(title, description, userId) {

    let threadExist  = await Thread.findOne({ title });
    if(threadExist) {
        throw new Error("Thread sudah ada")
    }

    const maker =  await UserService.getUsername(userId);

    let newThread = new Thread({
        title,
        description,
        maker
    });

    await newThread.save();

    return newThread.populate("user");
};

async function likeThread(threadId) {
    let existThread = await Thread.findById(threadId)
    if(!existThread) {
        throw new Error("Thread tidak ada")
    }

    existThread.likes = existThread.likes + 1;
    existThread.save();
    return existThread;

}

async function commentThread(threadId, userId, comment) {

    const commentator =  await UserService.getUsername(userId);

    let existThread = await Thread.findById(threadId)
    if(!existThread) {
        throw new Error("Thread tidak ada")
    }

    let newComment = new Comment({
        threadId,
        commentator,
        comment
    });

    await newComment.save();

    return newComment;

}

async function getThreads(req) {
    try {

        // We destructure the req.query object to get the page and limit variables from url 
        const { page = 1, limit = 5 } = req.query;

        const threads = await Thread.find({ })
                    .limit(limit * 1)
                    .skip((page-1) * limit)
                    .sort({ createDate: -1 });
        console.log(threads);
        
        const count = await Thread.countDocuments();

        const response = {
            threads,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        }

        return response;
    }catch (err) {
        throw new Error("Error pada saat mengambil data threads");
    }
}

async function getTopThread() {
    let minimalTopThreadLike = 5;
    let topThreads = await Thread.find({ 'likes': {$gt:minimalTopThreadLike}}).sort({createDate: 'desc'});
    return topThreads;
}

async function getComments(threadId) {

    const comments = await Comment.find({ threadId: threadId }).sort({createDate: 'desc'});

    return comments;

}

module.exports = {createThread, likeThread, commentThread, getTopThread, getThreads, getComments};
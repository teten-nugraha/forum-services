const Thread = require('../models/thread');
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

module.exports = {createThread, likeThread};
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

module.exports = {createThread};
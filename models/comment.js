const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    threadId: {
        type: String,
        required: true
    },
    commentator: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema);
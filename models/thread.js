const mongoose = require('mongoose')
const Schema = mongoose.Schema

const threadSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    maker: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Thread', threadSchema)

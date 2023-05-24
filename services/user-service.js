const User = require('../models/user')

async function getByEmail(email) {
    const user = await User.findOne({ email })
    return user
}

async function getById(id) {
    const user = await User.findById(id)
    return user
}

async function getUsername(id) {
    const user = await User.findById(id)
    return user.username
}

module.exports = { getByEmail, getById, getUsername }

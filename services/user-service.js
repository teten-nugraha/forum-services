const User = require('../models/User');

async function getByEmail(email) {
    let user = await User.findOne({ email });
    return user;
}

async function getById(id) {
    let user = await User.findById(id);
    return user;
}

module.exports = {getByEmail, getById};
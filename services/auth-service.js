const bcrypt = require('bcryptjs/dist/bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

async function createUser(username, email, password) {

    let userExist = await User.findOne({ email });
    if(userExist) {
        throw new Error("User sudah terdaftar")
    }

    let newUser = new User({
        username,
        email, 
        password
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    return newUser;

};

async function signIn(email, password) {
    let userExist = await User.findOne({ email });
    if(!userExist) {
        throw new Error("User tidak ada")
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if(!isMatch) {
        throw new Error("Password tidak cocok")
    }
    
    const payload = {
        user: {
            id: userExist._id
        }
    };
    
    // jwt generation
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 36000 },
        {
            expiresInt: "1hr"
        }
    )
}


module.exports = {createUser, signIn};
const UserService = require('../services/auth-service')

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const savedUser = await UserService.createUser(
            username,
            email,
            password
        )

        res.status(201).json({
            success: true,
            data: savedUser,
        })
    } catch (err) {
        res.status(500).json({
            error: true,
            message: err.message,
        })
    }
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await UserService.signIn(email, password)
        res.status(200).json({
            success: true,
            data: token,
        })
    } catch (err) {
        res.status(500).json({
            error: true,
            message: err.message,
        })
    }
}

module.exports = { signUp, signIn }

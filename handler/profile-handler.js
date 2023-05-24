const UserService = require('../services/user-service')

const me = async (req, res) => {
    const userId = await req.user.id

    const existUser = await UserService.getById(userId)
    if (!existUser) {
        return res.status(401).json({
            success: true,
            message: 'User not found',
        })
    }

    res.status(200).json({
        success: true,
        data: existUser,
    })
}

module.exports = { me }

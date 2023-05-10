const me = (req, res) => {

    let userId = req.user;

    res.status(200).json({
        success: true,
        data: userId
    });
};

module.exports = {me};
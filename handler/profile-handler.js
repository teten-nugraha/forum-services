const me = (req, res) => {
    res.status(200).json({
        success: true,
        data: 'Me'
    });
};

module.exports = {me};
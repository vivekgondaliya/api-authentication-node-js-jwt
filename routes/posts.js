const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts:{
            userId:  req.user._id,
            title: 'first post',
            description: 'can you see me?'
        }
    });
});

module.exports = router;
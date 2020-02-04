const router = require('express').Router();
const verify = require('./verifyToken');
//const Post = require('../model/Post');

//GET
router.get('/', verify, (req, res) => {
    res.json({
        posts:{
            userId:  req.user._id,
            title: 'first post',
            description: 'can you see me?'
        }
    });
});

//Specific post
// router.get('/:postId', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.postId);
//         res.json(post);
//     } catch (error) {
//         res.json({ message: err});
//     }
// })

router.get('/all', verify, (req, res) => {
    res.send('All POSTS');
});

// POST
// router.post('/', verify, async (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     try {
//         const savedPost = await post.save();
//         res.send(savedPost);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

module.exports = router;
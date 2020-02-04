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

router.get('/all', verify, (req, res) => {
    res.send('All POSTS');
});


//Specific post
// router.get('/:postId', verify, async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.postId);
//         res.json(post);
//     } catch (error) {
//         res.json({ message: err});
//     }
// })

//Delete Post
// router.delete('/:postId', verify, async (req, res) => {
//     try {
//         const deletePost = await Post.remove({ _id: req.params.postId });
//         res.json(deletePost);
//     } catch (error) {
//         res.json({ message: err});
//     }
// })

//Update Post
// router.patch('/:postId', verify, async (req, res) => {
//     try {
//         const updatedPost = await Post.updateOne(
//             { _id: req.params.postId }, 
//             { $set : {title : req.body.title} }
//         );
//         res.json(updatedPost);
//     } catch (error) {
//         res.json({ message: err});
//     }
// });

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
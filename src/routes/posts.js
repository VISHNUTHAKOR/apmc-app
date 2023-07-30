const express = require('express');
const router = express.Router();
const Post = require("../models/Post");

//get all posts
router.get('/', async (req, res) => {
    try {
        const getPosts = await Post.find();
        res.json(getPosts);
    } catch (error) {
        res.status(500).json({msg: error});
    }
});

//create a post
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const postData = new Post({
            title: data.title,
            description: data.description
        });

        const resCreated = await postData.save();
        console.log(resCreated);

        res.status(201).json(resCreated);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
});

//get specific post
router.get('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const getPost = await Post.findById(postId);
        res.json(getPost);
    } catch (error) {
        res.status(500).json({msg: error});
    }
});

//delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.postId);
        // console.log(deletePost);
        res.json(deletePost);
    } catch (error) {
        // console.log(error);
        res.status(500).json({msg: error});
    }

});

//update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.postId, {
            title: req.body.title
        }, {new: true});
        res.json(updatePost);
    } catch (error) {
        res.status(500).json({msg: error});
    }
});

module.exports = router;
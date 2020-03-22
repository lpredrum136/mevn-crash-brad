const express = require('express');
const router = express.Router();

// Post model
const Post = require('../../models/Post');

// @route GET /api/posts
// @desc Get all posts
// @access Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.log(error.message);
  }
});

// @route POST /api/posts
// @desc Add new post
// @access Public
router.post('/', async (req, res) => {
  try {
    const newPost = new Post({
      text: req.body.text
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
});

// @route DELETE /api/posts
// @desc Delete one post
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.remove();
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

const Post = require("../models/posts");
const createPost = async (req, res) => {
  try {
    const posts = new Post({
      body: req.body.body,
      owner: req.body.owner,
    });

    const createdPost = await posts.save();
    return res.status(200).json(createdPost);
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts) {
      return res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
  }
};

/* const getPostByName = async (req, res) => {
  try {
    const posts = await Post.findOne({ owner: req.body.owner });
    if (posts) {
      return res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
  }
}; */

module.exports = { createPost, getPost };

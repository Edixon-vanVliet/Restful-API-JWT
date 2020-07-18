const Post = require("../models/Post.model");

exports.createPost = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const post = await new Post({ title, description }).save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPost = async (req, res, next) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updatePost = async (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const post = await Post.findByIdAndUpdate(id, { title, description });

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deletePost = async (req, res, next) => {
    const { id } = req.params;

    try {
        const post = await Post.findByIdAndDelete(id);

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

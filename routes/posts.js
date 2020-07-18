const Router = require("express").Router();
const validators = require("../validators");
const { validateCreatePostFields } = require("../validators/posts/createPosts");

const {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
} = require("../controllers/posts");

Router.post("/", validators(validateCreatePostFields), createPost);
Router.get("/", getPosts);
Router.get("/:id", getPost);
Router.post("/:id", validators(validateCreatePostFields), updatePost);
Router.delete("/:id", deletePost);

module.exports = Router;

const Router = require("express").Router();
const validators = require("../validators");
const { validateCreatePostFields } = require("../validators/posts/createPosts");

const verify = require("./verifyToken");

const {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
} = require("../controllers/posts");

Router.post("/", verify, validators(validateCreatePostFields), createPost);
Router.get("/", verify, getPosts);
Router.get("/:id", verify, getPost);
Router.post("/:id", verify, validators(validateCreatePostFields), updatePost);
Router.delete("/:id", verify, deletePost);

module.exports = Router;

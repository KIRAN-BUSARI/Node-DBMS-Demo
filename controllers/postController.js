const Post = require("../models/Post.js");

exports.createNewPost = async (req, res, next) => {
    try {
        const { title, body } = req.body;

        if (!title || !body) {
            return res.status(400).json({
                message: "title and body are required"
            })
        }

        const post = new Post(title, body);

        result = await post.save();

        res.status(201).json({
            message: "Post Created Successfully",
            result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getAllPosts = async (req, res, next) => {
    try {
        const [result, _] = await Post.findAll();

        res.status(200).json({
            message: "Fetched all posts successfully",
            count: result.length,
            result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        const [result, _] = await Post.findById(req.params.id);

        res.status(200).json({
            message: "Fetched post successfully",
            result: result[0]
        });
    } catch (error) {
        console.log(error);
        next(error);

    }
}

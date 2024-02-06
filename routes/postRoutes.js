const express = require("express");
const postControllers = require("../controllers/postController.js");
const router = express.Router();

router.route("/").get(postControllers.getAllPosts).post(postControllers.createNewPost)
router.route("/:id").get(postControllers.getPostById)

module.exports = router;

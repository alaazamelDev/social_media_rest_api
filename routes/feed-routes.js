const { Router } = require("express");
const feedsController = require("../controllers/feeds-controller");

//! feed api endpoints

// create new Router Instance
const router = Router();

// GET => /feed/posts/
router.get("/posts", feedsController.index);

// POST => /feed/post/
router.post("/post", feedsController.store);

module.exports = router;

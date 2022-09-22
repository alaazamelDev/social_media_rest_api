const { Router } = require("express");
const feedsController = require("../controllers/feeds-controller");
const validator = require("express-validator");

//! feed api endpoints

// create new Router Instance
const router = Router();

// GET => /feed/posts/
router.get("/posts", feedsController.index);

// POST => /feed/post/
router.post(
  "/post",
  [
    validator.body("title").trim().isLength({ min: 5 }),
    validator.body("content").trim().isLength({ min: 5 }),
  ],
  feedsController.store
);

module.exports = router;

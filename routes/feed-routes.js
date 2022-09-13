const { Router } = require("express");
const feedsController = require("../controllers/feeds-controller");

//! feed api endpoints

// create new Router Instance
const router = Router();

// GET => /posts/
router.get("/", feedsController.index);

// POST => /posts/
router.post("/", feedsController.store);

module.exports = router;

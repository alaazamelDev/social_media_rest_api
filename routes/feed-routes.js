const { Router } = require("express");
const feedsController = require("../controllers/feeds-controller");

// create new Router Instance
const router = Router();

// feed api endpoints
router.get("/", feedsController.index);

router.post("/", feedsController.store);

module.exports = router;

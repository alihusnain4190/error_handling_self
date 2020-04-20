const restaurantsRouter = require("express").Router();
const { getAreas, postArea } = require("../controller/restaurants");
restaurantsRouter.get("/", getAreas);
restaurantsRouter.post("/", postArea);
module.exports = restaurantsRouter;

const restaurantsRouter = require("express").Router();
const {
  getAreas,
  postArea,
  getRestaurants,
  addRestaurants,
} = require("../controller/restaurants");
const restaurantApi = require("./restaurant.route");

restaurantsRouter.get("/:id/restaurants", getRestaurants);
restaurantsRouter.get("/", getAreas);
restaurantsRouter.post("/", postArea);
restaurantsRouter.post("/:id/restaurants", addRestaurants);
module.exports = restaurantsRouter;

const express = require("express");
const apiRouter = express.Router();
const restaurantsRouter = require("./api.restaurants");
apiRouter.use("/areas", restaurantsRouter);
module.exports = apiRouter;

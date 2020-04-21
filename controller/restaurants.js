const {
  fetchArea,
  insertArea,
  fetchRestaurants,
  insertRestaurant,
} = require("../model/restuarants.model");
exports.getAreas = (req, res, next) => {
  return fetchArea()
    .then((areas) => {
      res.status(200).send(areas);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postArea = (req, res, next) => {
  const area = req.body;
  insertArea(area)
    .then((area) => {
      res.status(201).send({ area });
    })
    .catch((err) => {
      next(err);
    });
};
exports.getRestaurants = (req, res, next) => {
  fetchRestaurants(req.params, req.query).then((restaurants) => {
    res.status(200).send(restaurants);
  });
};
exports.addRestaurants = (req, res, next) => {
  const { restaurant } = req.body;
  insertRestaurant(restaurant);
};

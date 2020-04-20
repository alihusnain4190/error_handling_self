const { fetchArea, insertArea } = require("../model/restuarants.model");
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
  insertArea(area).then((area) => {
    console.log(area.areas_name);
    res.status(201).send({ area });
  });
};

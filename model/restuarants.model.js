const client = require("../db/index");
exports.fetchArea = () => {
  return client.query("SELECT * FROM areas;").then((res) => {
    const obj = {};
    obj.total_areas = res.rowCount;
    obj.areas = res.rows;

    return obj;
  });
};
exports.insertArea = (areas) => {
  return client
    .query(`INSERT INTO areas(areas_name) VALUES($1) RETURNING *;`, [areas])
    .then(({ rows }) => {
     
      return rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

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
exports.fetchRestaurants = ({ id }, { cuisine = "" }) => {
  let name;
  if (cuisine == "") {
    name = `SELECT * FROM restaurants WHERE areas_id=${id};`;
  } else {
    name = `SELECT * FROM restaurants WHERE areas_id=${id} And restaurants_cusine='${cuisine}'`;
  }
  return client.query(name).then((res) => {
    let obj = {};
    obj.areas_id = id;
    obj.total_restuarants = res.rowCount;
    obj.restaurants = res.rows;
    return obj;
  });
};
exports.insertRestaurant = ({
  restaurants_name,
  restaurants_cusine,
  restaurants_website,
  areas_id,
}) => {
  return client
    .query(
      `INSERT INTO restaurants(restaurants_name,restaurants_cusine,restaurants_website,areas_id) VALUES($1,$2,$3,$4) RETURNING *;`,
      [restaurants_name, restaurants_cusine, restaurants_website, areas_id]
    )
    .then(({ rows }) => {
      console.log(rows);
      return rows;
    });
};

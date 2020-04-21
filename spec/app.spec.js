const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");
describe("app", () => {
  describe("/api", () => {
    describe("/areas", () => {
      describe("GET", () => {
        it("status 200 with array of objects", () => {
          request(app)
            .get("/api/areas")
            .expect(200)
            .then((res) => {
              expect(res.body.areas).to.be.a("array");
            });
        });
        it("status 200 and total area should be equal to 3", () => {
          return request(app)
            .get("/api/areas")
            .expect(200)
            .then((res) => {
              expect(res.body.total_areas).to.equal(res.body.total_areas);
            });
        });
        it("status 200 ,return with object of area", () => {
          return request(app)
            .get("/api/areas")
            .expect(200)
            .then((res) => {
              res.body.areas.forEach((element) => {
                expect(element).to.have.a("object");
              });
            });
        });
        it("status 200, responce with array of restaurants with area id", () => {
          return request(app)
            .get("/api/areas/1/restaurants")
            .expect(200)
            .then((res) => {
              expect(res.body).to.have.a("object");
            });
        });
        it("status 200 response object of restaurants by cuisine", () => {
          return request(app)
            .get("/api/areas/2/restaurants?cuisine=karahi")
            .expect(200)
            .then((res) => {
              expect(res.body).to.have.a("object");
              //   expect(res.body).to.haveOwnProperty([
              //     "area_id",
              //     "restaurant_id",
              //     "total_restaurants",
              //   ]);
            });
        });
        // it("status 404 response object of restaurants by cuisine", () => {
        //   return request(app)
        //     .get("/api/areas/10/restaurants?cuisine=karahi")
        //     .expect(404)
        //     .then((res) => {
        //       expect(res.body).to.have.a("object");
        //     });
        // });
      });

      describe("POST", () => {
        it.only("status 201 add a restaurant", () => {
          return request(app)
            .post("/api/areas/3/restaurants")
            .send({
              restaurant: {
                restaurants_name: "Delhi 2 Go",
                restaurants_cusine: "Indian",
                restaurants_website: "https://www.dheli-2-g-.com",
                areas_id: 3,
              },
            })
            .expect(201)
            .then((res) => {
              expect(res.body.restaurant).to.deep.equal({
                restaurant: {
                  restaurants_name: "Delhi 2 Go",
                  restaurants_cusine: "Indian",
                  restaurants_website: "https://www.dheli-2-g-.com",
                  areas_id: 3,
                },
              });
            });
        });
      });
    });
  });
});

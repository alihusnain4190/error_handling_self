const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");
describe("app", () => {
  describe("/api", () => {
    describe("/restuarents", () => {
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
      });
      describe("Post", () => {
        it("status 201 responce with keys of area object", () => {
          return request(app)
            .post("/api/areas")
            .send({ areas_name: "liverpool" })
            .expect(201)
            .then((res) => {
              expect(res.body.area).to.have.all.keys([
                "areas_id",
                "areas_name",
              ]);
            });
        });
    
      });
    });
  });
});

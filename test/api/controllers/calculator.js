var should = require("should");
var request = require("supertest");
var server = require("../../../app");

describe("controllers", function () {
  describe("calculator", function () {
    describe("GET /add", function () {
      it("should throw an error when x is not provided", function (done) {
        request(server)
          .get("/add")
          .query({ y: 1 })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .end(done);
      });

      it("should throw an error when y is not provided", function (done) {
        request(server)
          .get("/add")
          .query({ x: 1 })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .end(done);
      });

      it("should add 2 ints", function (done) {
        request(server)
          .get("/add")
          .query({ x: 10, y: 6 })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            res.body.should.eql("The result is 16");
            done();
          });
      });
    });
    describe("GET /subtract", function () {
      it("should throw an error when x is not provided", function (done) {
        request(server)
          .get("/subtract")
          .query({ y: 1 })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .end(done);
      });

      it("should throw an error when y is not provided", function (done) {
        request(server)
          .get("/subtract")
          .query({ x: 1 })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .end(done);
      });

      it("should subtract 2 ints", function (done) {
        request(server)
          .get("/subtract")
          .query({ x: 10, y: 6 })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            res.body.should.eql("The result is 4");
            done();
          });
      });
    });
  });
});

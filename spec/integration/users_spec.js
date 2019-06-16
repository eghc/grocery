const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:8080/";
const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : users", () => {

  beforeEach((done) => {

    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

  });
  describe("POST /signUp", () => {

// #1
  it("should create a new user with valid values", (done) => {

    const options = {
      url: base + '/signUp',
      form: {
        firstname: "Test",
        lastname: "Testy",
        email: "user@example.com",
        password: "123456789"
      }
    }

    request.post(options,
      (err, res, body) => {

// #2
        User.findOne({where: {email: "user@example.com"}})
        .then((user) => {
          expect(user).not.toBeNull();
          expect(user.email).toBe("user@example.com");
          expect(user.id).toBe(1);
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      }
    );
  });

// #3
    it("should not create a new user with invalid attributes", (done) => {
      request.post(
        {
          url: base + '/signUp',
          form: {
            email: "no",
            password: "123456789"
          }
        },
        (err, res, body) => {
          User.findOne({where: {email: "no"}})
          .then((user) => {
            expect(user).toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });
  });


});

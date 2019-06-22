const sequelize = require("../../src/db/models/index").sequelize;
const listItems = require("../../src/db/models").listItems;

describe("listItems", () => {

  beforeEach((done) => {
// #1
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

  });

  describe("#create()", () => {

    it("should create a listItems object", (done) => {
      listItems.create({
        item: "Apples",
      })
      .then((item) => {
        expect(item.item).toBe("Apples");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  it("should create a listItems object with a cost", (done) => {
    listItems.create({
      item: "Apples",
      cost: "4.55"
    })
    .then((item) => {
      expect(item.item).toBe("Apples");
      expect(item.cost).toBe(4.55);
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });


});

  describe("#delete()", () => {


    it("should delete listItems", (done) => {
      listItems.create({
        item: "Apples",
      })
      .then((item) => {
        item.destroy()
        .then(() => {

          listItems.findById(item.id)
           .then((i) => {
             expect(i).toBeNull();
             done();
           });
        })
        .catch((err) => {
          console.log(err);
          done();
        });

      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

  describe("#update()", () => {


      it("should delete listItems and return deleted item", (done) => {
        listItems.create({
          item: "Apples",
          cost: "4.55"
        })
        .then((item) => {
          let newItem = {
            item: item.item,
            cost: item.cost,
            purchased: true,
            purchaseDate: new Date(2019, 6, 10)
          }

          item.update(newItem, {
            fields: Object.keys(newItem)
          })
          .then((i) => {
            expect(i.purchased).toEqual(true);
            expect(i.purchaseDate).toEqual(new Date(2019, 6, 10));
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });

        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });


  });


});

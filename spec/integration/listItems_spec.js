const request = require("request");
const axios = require('axios');
const server = require("../../src/server");
const base = "http://localhost:8080";
const listItems = require("../../src/db/models").listItems;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : listItems", () => {
  let newItem = null;

  beforeEach((done) => {

    listItems.sync({
      force:true
    })
    .then(() => {
      done(null);
    })
    .catch((err) => {
      console.log(err);
      done();
    });

    listItems.create({
      item: "Notebooks",
      cost: 3.22
    }).then((item) =>{
      newItem = item;
      done(null);

    }).catch((err)=>{
      console.log(err);
      done();
    });

  });


  describe("GET /getItems", () => {

    axios.get(base + '/getItems').then((res) => {
      expect(res.length).toBeEqual(1);
      expect(res[0].id).toBeEqual(newItem.id);
      done();

    }).catch(err => {
      console.log(err);
      done();
    });

  });


  describe("POST /item/add", () => {

        it("should create a new item", (done) => {

          let options = {
            url: base + '/item/add',
            body:{
              item: "Apples",
              cost: "4.55"
            }
          };
          //console.log(options.url);
          axios.post(options.url, options.body).then((res) => {
              listItems.findOne({where: {item: "Apples"}})
              .then((item) => {
                //console.log(item);
                expect(item.item).toBeEqual("Apples");
                expect(item.cost).toBeEqual(4.55);
                done();
              })
              .catch((err) => {
                console.log(err);
                done();
              });

          }).catch(err => {
            console.log(err);
            done();
          });

        });



  });



  describe("POST /item/update/" , () => {

        it("should update the item to purchased w/ a purchaseDate", (done) => {

          let options = {
            url: base + '/item/update/' + newItem.id,
            body:{
              purchased: true,
              purchaseDate: new Date(2019, 6, 10);
            }
          };
          //console.log(options.url);
          axios.post(options.url, options.body).then((res) => {
              listItems.findOne({where: {item: "Notebooks"}})
              .then((item) => {
                //console.log(item);
                expect(item.item).toBeEqual("Notebooks");
                expect(item.purchased).toBeEqual(true);
                expect(item.purchaseDate).toBeEqual(new Date(2019, 6, 10));
                done();
              })
              .catch((err) => {
                console.log(err);
                done();
              });

          }).catch(err => {
            console.log(err);
            done();
          });

        });



  });



  describe("POST /item/delete/" , () => {

        it("should delete the item", (done) => {

          let options = {
            url: base + '/item/delete/' + newItem.id,
          };
          //console.log(options.url);
          axios.post(options.url, options.body).then((res) => {
              listItems.findOne({where: {item: "Notebooks"}})
              .then((item) => {
                //console.log(item);
                expect(item).toBeNull();
                done();
              })
              .catch((err) => {
                console.log(err);
                done();
              });

          }).catch(err => {
            console.log(err);
            done();
          });

        });



  });


});

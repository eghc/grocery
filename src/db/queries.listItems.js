const listItems = require("./models").listItems;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//const User = require("./models").User;

module.exports = {
// #2
  create(item, callback){

    return listItems.create(item)
    .then((i) => {
      callback(null, i);
    })
    .catch((err) => {
      callback(err);
    })
  },

  update(newItem, callback){
    return listItems.findById(newItem.id)
     .then((item) => {
       item.update(newItem, {
         fields: Object.keys(newItem)
       })
       .then(() => {
         callback(null, item);
       })
       .catch((err) => {
         callback(err);
       });
     })
     .catch((err) => {
       callback(err);
     });


  },
  delete(itemId, callback){
    return listItems.findById(itemId)
     .then((item) => {
       //set to true
      item.update({deleted: true})
      .then(() => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      });

    }).catch((err) => {
      callback(err);
    });

  },
  getAll(callback){
    return listItems.findAll({
      order: [
           ['id', 'ASC']
       ],
       where:{
         deleted: {
           [Op.not]: true
         }
       }
    })
    .then((items) => {
      //console.log(items);
      callback(null, items);
    })
    .catch((err) => {
      callback(err);
    })

  },
  findNew(userId,timestamp, callback){
    return listItems.findAll({
      where:{
        updatedAt:{
            [Op.gte]: timestamp
        }
      }
    })
    .then((items) => {
      //console.log(items);
      callback(null, items);
    })
    .catch((err) => {
      callback(err);
    })
  }

}

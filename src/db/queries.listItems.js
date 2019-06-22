const listItems = require("./models").listItems;
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
      item.destroy()
      .then((res) => {
        callback(null, item);
      });
    }).catch((err) => {
      callback(err);
    });

  },
  getAll(callback){
    return listItems.findAll({
      order: [
           ['id', 'ASC']
       ]
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

const itemsQueries = require("../db/queries.listItems.js");
//const passport = require("passport");
const Authorizer = require("../policies/application");

module.exports = {

  add(req, res, next){
    const authorized = new Authorizer(req.user).create();

    if(authorized){
      let request = req.body;
      //console.log(req.body);
      request.cost = request.cost ? parseFloat(request.cost) : null;
      itemsQueries.create(request, (err, item) =>{
        if(err){
          res.sendStatus(400);
        } else {
          //console.log(items);
          // res.writeHead(200);
          // res.write(items);
          // res.end();
          res.send(item);
        }

      });

    }else{
      res.sendStatus(400);
    }

  },

  update(req, res, next){

    const authorized = new Authorizer(req.user).update();

    if(authorized){
      //if purhcased is true, get user and date if authorized
      let request = req.body;
    }else{
      res.sendStatus(400);
    }

  },

  delete(req, res, next){

    const authorized = new Authorizer(req.user).delete();

    if(authorized){
      let request = req.body;


    }else{
      res.sendStatus(400);
    }

  },

  getAll(req, res, next){
    //console.log("0");
    const authorized = new Authorizer(req.user).create();
    //console.log("1");
    if(authorized){
      //console.log("2");
      let request = req.body;
      itemsQueries.getAll((err,items) => {
        //console.log("3");
        if(err){
          res.sendStatus(400);
        } else {
          //console.log(items);
          // res.writeHead(200);
          // res.write(items);
          // res.end();
          res.send(items);
        }

      })

    }else{
      res.sendStatus(400);
    }

  }
}

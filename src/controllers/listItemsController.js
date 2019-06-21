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
      console.log("issue with adding");
      res.sendStatus(400);
    }

  },

  update(req, res, next){

    const authorized = new Authorizer(req.user).update();

    if(authorized){
      //if purhcased is true, get user and date if authorized
      //let request = ;
      let newReq = {
        id: req.body["id"],
        purchased: req.body["purchased"],
        purchaseDate: req.body["purchased"]? new Date() : null,
        userId: req.body["purchased"]? req.user.id: null
      }
      //console.log(newReq);
      itemsQueries.update(newReq, (err, item) => {
        //console.log(item);
        if(err){
          res.sendStatus(400);
        }else{
          res.send(item);
        }

      });
    }else{
      res.sendStatus(400);
    }

  },

  delete(req, res, next){

    const authorized = new Authorizer(req.user).destroy();

    if(authorized){
      //let request = req.body;
      //console.log("delete!");
      itemsQueries.delete(req.params.id, (err, item)=>{
        //console.log(err);
        if(err){
          res.sendStatus(400);
        }else{
          res.send(item);
        }
      });

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

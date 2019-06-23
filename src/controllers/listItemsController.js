const itemsQueries = require("../db/queries.listItems.js");
const userQueries = require("../db/queries.users.js");
//const passport = require("passport");
const Authorizer = require("../policies/application");

module.exports = {

  add(req, res, next){
    //console.log(req);
    const authorized = new Authorizer(req.user).create();

    if(authorized){
      let request = req.body;
      //
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
          //get user name
          if(newReq.purchased){
            userQueries.getUser(req.user.id, (err,user) => {
              if(err){
                res.sendStatus(400);
              }else{
                item.dataValues.userName = user.firstname.concat(" ",user.lastname);
                //console.log(item);
                res.send(item);
              }
            });
          }else{
            res.send(item);
          }

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
      let newItems = [];
      itemsQueries.getAll((err,items) => {
        if(err){
          res.sendStatus(400);
        } else {
          items.map(item => {
            //count += 1;
            if(item.userId === null){
              //console.log("null name");
              item.dataValues.userName = null;
              newItems.push(item);
            }else{

              userQueries.getUser(item.userId, (err,user) => {
                if(err){
                  item.dataValues.userName = null;
                  newItems.push(item);
                }else{
                  item.dataValues.userName = user.firstname.concat(" ",user.lastname);
                  newItems.push(item);
                }

                //break out and send request
                if(newItems.length === items.length){
                  res.send(newItems);
                }

              });
            }


          });
        }

      });

    }else{
      res.sendStatus(400);
    }

  }
}

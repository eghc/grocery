const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const Authorizer = require("../policies/application");

module.exports = {
  signUp(req, res, next){
    let newUser = req.body;
    //console.log(req.body);
    userQueries.createUser(newUser, (err, user) => {
       if(err){
         req.flash("error", err);
         res.sendStatus(400);
       } else {

// #3
         passport.authenticate("local")(req, res, () => {
           req.flash("notice", "You've successfully signed in!");
           res.sendStatus(200);
         })
       }
     });

  },
  logIn(req, res, next){
    passport.authenticate("local")(req, res, function () {
      if(!req.user){
        req.flash("notice", "Sign in failed. Please try again.")
        //res.redirect("/users/sign_in");
        res.sendStatus(400);
        //res.send('Incorret params');
      } else {

        req.flash("notice", "You've successfully signed in!");
        //res.redirect("/");
        res.sendStatus(200);
        //res.send('Correct params');
      }
    })
    //console.log(req.body);
  },
  logOut(req, res, next){
    console.log("log out");
    req.logout();
    //req.flash("notice", "You've successfully signed out!");
    res.sendStatus(200);
    //res.redirect("/");
  },
  isAuthorized(req,res,next){
    const authorized = new Authorizer(req.user).create();
    console.log(authorized);
    // res.sendStatus(300);
    if(authorized) {
      //console.log("authed");
      res.sendStatus(200);
    }else{
      res.sendStatus(400);
    }
  }
}

require("dotenv").config();
const flash = require("express-flash");
const passportConfig = require("./passport-config");
const bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session");

module.exports = {
  init(app,express){

    app.use(bodyParser.json());
    app.use(session({
     secret: process.env.cookieSecret,
     resave: false,
     saveUninitialized: false,
     cookie: { maxAge: 1.21e+9 } //set cookie to expire in 14 days
   }));
   app.use(flash());
   passportConfig.init(app);
   app.use((req,res,next) => {
     res.locals.currentUser = req.user;
     next();
   })

  }
};

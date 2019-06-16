const express = require("express");
const app = express();
// const bodyParser = require('body-parser');
 const path = require('path');
//const cors = require('cors');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

//app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.json());

module.exports = app;

const mainConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
mainConfig.init(app,express);
routeConfig.init(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

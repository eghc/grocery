module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const listItemsRoutes = require("../routes/listItems");
    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(listItemsRoutes);
  }
}

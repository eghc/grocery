//const createSubscriber =require("pg-listen");
//import { databaseURL } from "./config" "postgresql://macuser@127.0.0.1/grocery-dev"
const {Pool} = require("pg");
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});



module.exports = {
  async connect () {
    pool.connect((err, client) => {
      console.log("test");
      if (err) {
        console.error(err);
      }
      // Handle notifications
      client.on('notification', function (msg) {
        console.log("notify");
        const payload = msg.payload;
        console.log(payload);
        // Send payload into a queue etc...
      });
      // Listen for NOTIFY calls
      var query = client.query('LISTEN db_notifications');
    });
  }
}

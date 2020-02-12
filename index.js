const express = require("express");
const bodyParser = require("body-parser");
const route = require("./Api");
//express set up
const app = express();

app.use(bodyParser.json());

app.use(route);

//Listen for request
app.listen(process.env.port || 4000, function() {
  console.log("now listening for requests");
});

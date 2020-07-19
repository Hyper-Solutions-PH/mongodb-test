var logger = require("morgan"),
  cors = require("cors"),
  http = require("http"),
  express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

var app = express();
var port = 3000;
var userCtrl = require("./user-controller");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(require("./routes"));

app.listen(port, function (err) {
  console.log("Listening on Port: " + port);
});
//{user}:{password}@{host}:{port}/{database}
mongodb: mongoose.connect(
  "mongodb://admin:admin123@178.238.234.21:27017/testdb"
);
mongoose.connection.on("error", (err) => {
  console.log("Mongodb Error: ", err);
  process.exit();
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB is successfully connected");
});

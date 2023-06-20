const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/FacturationDB", {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => {
    console.log("db connecting");
  })
  .catch(() => {
    console.log("db not connecting");
  });
require("./Client.model");

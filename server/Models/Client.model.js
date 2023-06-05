const mongoose = require("mongoose");

var ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  Adress: {
    type: String,
  },
});

mongoose.model("facturation", ClientSchema);

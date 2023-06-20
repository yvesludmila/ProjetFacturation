const { createConnection } = require("mongoose");

const router = require("express").Router();

// post clients

router.route("/facturation").post((req, res) => {
  let nomClient = req.body.NOM_CLIENT;
  const db = createConnection();
  db.run("INSERT INTO CLIENTS(NOM CLIENT) VALUE" + { nomClient }, (ERR) => {
    if (ERR) console.log(err);
    else res.json({ message: "inssertion effectuer" });
  });
});

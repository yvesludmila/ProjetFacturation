require("./Models/DB");
const path = require("path");
const express = require("express");
// const cors = require("cors");

// const ControllerClient = require("./Controllers/ControllerClient");

const app = express();
const PORT = process.env.PORT || 8080;
app.set("engine", "tsx");
app.use(
  "/app/src/App.tsx",
  express.static(
    path.resolve(__dirname, "/app/src/Components/Layout/Layout.tsx")
  )
);

app.get("/", (req, res) => {
  //res.send("app", path.join(__dirname, "/app/"));
  res.send("test server");
});
app.listen(PORT, () => {
  console.log("server start http://localhost:" + PORT);
});


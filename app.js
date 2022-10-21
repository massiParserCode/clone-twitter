const express = require("express");
const app = express();
const port = 3003;

const server = app.listen(port, () => {
  console.log("Server listening On Port " + port);
});

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  let payload = {
    pageTitle: "Home",
  };

  res.status(200).render("home", payload);
});

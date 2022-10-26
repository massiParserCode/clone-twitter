const express = require("express");
const app = express();
const port = 8000;
const middleware = require("./middleware");

const server = app.listen(port, () => {
  console.log("Server listening On Port " + port);
});

app.set("view engine", "pug");
app.set("views", "views");

// Routes login
const loginRoute = require("./routes/loginRoutes");
app.use("/login", loginRoute);

// route for main page
app.get("/", middleware.requireLogin, (req, res, next) => {
  let payload = {
    pageTitle: "Home",
  };

  res.status(200).render("home", payload);
});

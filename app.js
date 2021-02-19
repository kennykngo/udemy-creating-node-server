const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// setting the 'view engine' key with the 'pug' value
app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// yields us another middleware that parses the body sent through a form
app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));

// required to send CSS to the public's browser
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// using a catch all method
app.use((req, res, next) => {
  res.status(404).render("404");
  //   res.status(404).send("<h1>page not found </h1>");
});

app.listen(3000, () => console.log(`listening on localhost:3000`));

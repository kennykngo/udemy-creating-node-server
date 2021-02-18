const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// yields us another middleware that parses the body sent through a form
app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// using a catch all method
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
  //   res.status(404).send("<h1>page not found </h1>");
});

app.listen(3000, () => console.log(`listening on localhost:3000`));

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const expressHbs = require("express-handlebars");

const errorController = require("./controllers/error-controller");

// app.engine(
//   "hbs",
//   expressHbs({
//     extname: "hbs", // changes defualt extension name: .handlebars to .hbs
//     defaultLayout: "main-layout", // changes default layout
//     layoutsDir: "views/layouts/", // layout directory default
//   })
// );
// setting the 'view engine' key with the 'pug' value
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// yields us another middleware that parses the body sent through a form
app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));

// required to send CSS to the public's browser
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// using a catch all method
app.use(errorController.get404);

app.listen(3000, () => console.log(`listening on localhost:3000`));

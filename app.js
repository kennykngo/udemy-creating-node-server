const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin");

// yields us another middleware that parses the body sent through a form
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

// use() allows to add middleware functions
// takes in requestHandlers
app.use("/", (req, res, next) => {
  res.send("<h1> Hello from Express!</h1>");
});

app.listen(3000, () => console.log(`listening on localhost:3000`));

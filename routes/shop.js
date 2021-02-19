const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");
const adminData = require("./admin");

// use() allows to add middleware functions
// takes in requestHandlers
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;

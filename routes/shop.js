const path = require("path");
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");
const rootDir = require("../util/path");
const adminData = require("./admin");

// use() allows to add middleware functions
// takes in requestHandlers
router.get("/", productsController.getProduct);

module.exports = router;

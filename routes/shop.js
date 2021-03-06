const path = require("path");
const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop-controller");
// const rootDir = require("../util/path");
// const adminData = require("./admin");

// use() allows to add middleware functions
// takes in requestHandlers
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
// :{NAME} allows for the route to be anything
// ex. /products/12514
router.get("/products/:productId", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

module.exports = router;

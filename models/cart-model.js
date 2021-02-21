const fs = require("fs");
const path = require("path");

const pathJoin = path.join(
  path.dirname(require.main.filename),
  "data", // directory to store
  "products.json" // name that you want to store the file/create
);

module.exports = class Cart {
  static addProduct(id) {
    // fetch previous cart

    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (err) {
      }
    });
    // analyze the cart => find existing product
    // Add new proudct/increase quantity
  }
};

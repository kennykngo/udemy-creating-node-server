const fs = require("fs");
const path = require("path");

const pathJoin = path.join(
  path.dirname(require.main.filename),
  "data", // directory to store
  "products.json" // name that you want to store the file/create
);

const getProductsFromFile = (cb) => {
  fs.readFile(pathJoin, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathJoin, JSON.stringify(products), (err) =>
        console.log(err)
      );
    });

    // MUST use arrow function or else the 'this' will point to the wrong object
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};

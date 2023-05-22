const { v4: uuid } = require("uuid");
const express = require("express");
const routes = express.Router();

const products = [];

// Midlewares
function verifyIfProductExistsByName(request, response, next) {
  const { name } = request.body;

  const product = products.find((product) => product.name === name);

  if (!product) {
    return response.status(400).json({ error: "Product not found!" });
  }

  request.product = product;

  return next();
}

function verifyIfProductExistsByID(request, response, next) {
  const { id } = request.body;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return response.status(400).json({ error: "Product not found!" });
  }

  request.product = product;

  return next();
}

// Create product
routes.post("/product", (request, response) => {
  const { name, price } = request.body;

  id = uuid();
  product = {
    id,
    name,
    price,
  };
  products.push(product);
  return response.status(201).json(product);
});

// List all products
routes.get("/products", (request, response) => {
  return response.json(products);
});

// Get product by name
routes.get("/product", verifyIfProductExistsByName, (request, response) => {
  const { product } = request;
  return response.json(product);
});

// Update product by id
routes.put("/product", verifyIfProductExistsByID, (request, response) => {
  const { product } = request;
  const { name, price } = request.body;

  if (name) {
    product.name = name;
  }

  if (price) {
    product.price = price;
  }

  return response.json(product);
});

// Delete Product By ID
routes.delete("/product", verifyIfProductExistsByID, (request, response) => {
  const { product } = request;

  const index = products.indexOf(product);

  const x = products.splice(index, 1);

  return response.send("Product deleted successfully!");
});
//
module.exports = routes;

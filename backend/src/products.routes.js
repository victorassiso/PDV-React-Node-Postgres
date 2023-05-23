const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Midlewares
async function verifyIfProductExistsByName(request, response, next) {
  const { name } = request.body;

  const product = await prisma.product.findUnique({
    where: {
      name,
    },
  });

  if (!product) {
    return response.status(400).json({ error: "Product not found!" });
  }

  request.product = product;

  return next();
}

async function verifyIfProductNameIsAlreadyInUse(request, response, next) {
  const { name } = request.body;

  const product = await prisma.product.findUnique({
    where: {
      name,
    },
  });

  if (product) {
    return response.status(400).json({ error: "This name is already in use!" });
  }

  request.product = product;

  return next();
}

async function verifyIfProductExistsByID(request, response, next) {
  const { id } = request.body;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return response.status(400).json({ error: "Product not found!" });
  }

  request.product = product;

  return next();
}

// Create product
routes.post(
  "/product",
  verifyIfProductNameIsAlreadyInUse,
  async (request, response) => {
    const { name, status, price } = request.body;
    const product = await prisma.product.create({
      data: {
        status,
        name,
        price,
      },
    });
    return response.status(201).json(product);
  }
);

// List all products
routes.get("/products", async (request, response) => {
  const products = await prisma.product.findMany();
  return response.json(products);
});

// Get product by name
routes.get("/product", verifyIfProductExistsByName, (request, response) => {
  const { product } = request;
  return response.json(product);
});

// Update product by id
routes.put("/product", verifyIfProductExistsByID, async (request, response) => {
  const { id, name, price, status } = request.body;

  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      status,
      name,
      price,
    },
  });

  return response.json(product);
});

// Delete Product By ID
routes.delete(
  "/product",
  verifyIfProductExistsByID,
  async (request, response) => {
    const { id } = request.body;

    await prisma.product.delete({
      where: {
        id,
      },
    });

    return response.send("Product deleted successfully!");
  }
);

module.exports = routes;

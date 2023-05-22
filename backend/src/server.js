const routes = require("./products.routes");
const express = require("express");

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
  return response.send("Hello World!");
});

const portNumber = 3000;
app.listen(portNumber, () =>
  console.log("🚀 Server is running. Listening on port " + portNumber)
);

const routes = require("./src/server/routers/router");
const express = require("express");
const path = require("path");

const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname)));
server.use(express.urlencoded({ extended: true }));
server.use("/", routes);
server.listen(port, () => {
  console.log("Server is running");
});

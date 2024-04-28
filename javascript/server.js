const express = require("express");
const path = require("path");

const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname)));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,  "index.html"));
})

server.listen(port, () => {
  console.log("Server is running");
});

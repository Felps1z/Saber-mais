const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = path.join(__dirname, "../../../");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "home.html"));
});

module.exports = router;

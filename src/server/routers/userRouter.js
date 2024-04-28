const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = path.join(__dirname, "../../../");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "perfil.html"));
});

// TODO Criar os puts do perfil

module.exports = router;

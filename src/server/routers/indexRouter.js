const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = path.join(__dirname, "../../../");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

router.post("/", (req, res) => {
  if (req.body.matricula == "admin" && req.body.senha == "admin") {
    res.redirect("/home");
  } else {
    res.redirect("/");
  }
});

router.get("/cadastro", (req, res) => {
  res.sendFile(path.join(rootDir, "cadastro.html"));
});

router.post("/cadastro", (req, res) => { });
// TODO post cadastro

router.get("/recuperar-senha", (req, res) => {
  res.sendFile(path.join(rootDir, "recuperar_senha.html"));
})

router.post("/recuperar-senha", (req, res) => { });
// TODO post recuperar-senha

module.exports = router;

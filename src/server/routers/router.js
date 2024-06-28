const express = require("express");
const indexRoutes = require("./indexRouter");
const homeRoutes = require("./homeRouter");
const userRoutes = require("./userRouter");
const router = express.Router();

router.use("/", indexRoutes);
router.use("/perfil", userRoutes);
router.use("/home", homeRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();
const { createQR } = require("../controllers/qrcontroller");

router.post("/generate", createQR);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getProductsByMark,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/mark/:mark", getProductsByMark);

module.exports = router;

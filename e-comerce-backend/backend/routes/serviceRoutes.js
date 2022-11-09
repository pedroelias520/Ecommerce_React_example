const express = require("express");
const router = express.Router();
const {  
  getServices,
  getServiceById,
} = require("../controller/serviceControllers");

router.get("/", getServices);
router.get("/:id", getServiceById);

module.exports = router;

const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const CvControllers = require("./controllers/cvControllers");
const ProjetsControllers = require("./controllers/projetsControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/experiences", CvControllers.browse);
router.get("/projets", ProjetsControllers.browse);

module.exports = router;

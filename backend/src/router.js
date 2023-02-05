const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const CvControllers = require("./controllers/cvControllers");
const ProjetsControllers = require("./controllers/projetsControllers");
const LivresControllers = require("./controllers/livresControllers");
const TableauxControllers = require("./controllers/tableauxControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/experiences", CvControllers.browse);
router.get("/projets", ProjetsControllers.browse);
router.get("/livres", LivresControllers.browse);
router.get("/tableaux", TableauxControllers.browse);

router.post("/experiences", CvControllers.add);
router.post("/projets", ProjetsControllers.add);
router.post("/livres", LivresControllers.add);
router.post("/tableaux", TableauxControllers.add);

router.delete("/experiences/:id", CvControllers.destroy);
router.delete("/projets/:id", ProjetsControllers.destroy);
router.delete("/livres/:id", LivresControllers.destroy);
router.delete("/tableaux/:id", TableauxControllers.destroy);

module.exports = router;

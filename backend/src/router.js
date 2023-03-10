const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const CvControllers = require("./controllers/cvControllers");
const ProjetsControllers = require("./controllers/projetsControllers");
const LivresControllers = require("./controllers/livresControllers");
const TableauxControllers = require("./controllers/tableauxControllers");
const UserController = require("./controllers/userControllers");

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

router.get("/tableaux/:id", TableauxControllers.read);
router.put("/tableaux/:id", TableauxControllers.edit);
router.get("/projets/:id", ProjetsControllers.read);
router.put("/projets/:id", ProjetsControllers.edit);
router.get("/experiences/:id", CvControllers.read);
router.put("/experiences/:id", CvControllers.edit);
router.get("/livres/:id", LivresControllers.read);
router.put("/livres/:id", LivresControllers.edit);

router.post("/login", UserController.validateUser);
router.get("/admin", UserController.browse);
router.post("/admin", UserController.add);

module.exports = router;

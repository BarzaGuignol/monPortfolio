const models = require("../models");

const browse = (req, res) => {
  models.projets
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const projet = req.body;

  models.projets
    .insert(projet)
    .then(([result]) => {
      res.location(`/projets/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};

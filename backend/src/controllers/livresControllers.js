const models = require("../models");

const browse = (req, res) => {
  models.livres
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
  const livre = req.body;

  models.livres
    .insert(livre)
    .then(([result]) => {
      res.location(`/livres/${result.insertId}`).sendStatus(201);
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

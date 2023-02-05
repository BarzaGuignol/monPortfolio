const models = require("../models");

const browse = (req, res) => {
  models.tableaux
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
  const tableau = req.body;

  models.tableaux
    .insert(tableau)
    .then(([result]) => {
      res.location(`/tableaux/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add
};

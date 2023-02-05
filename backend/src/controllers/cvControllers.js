const models = require("../models");

const browse = (req, res) => {
  models.experiences
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
  const experience = req.body;

  models.experiences
    .insert(experience)
    .then(([result]) => {
      res.location(`/experiences/${result.insertId}`).sendStatus(201);
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

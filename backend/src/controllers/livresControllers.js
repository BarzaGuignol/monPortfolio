const models = require("../models");

const validate = require("../services/livres");

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

const read = (req, res) => {
  models.livres
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const livre = req.body;

const error = validate(livre, "required");
  if (!error) {
  models.livres
    .insert(livre)
    .then(([result]) => {
      res.location(`/livres/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  } else {
    res.status(422).send(error);
  }
};

const destroy = (req, res) => {
  models.livres
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const livre = req.body;

  livre.id = parseInt(req.params.id, 10);

  const validation = validate(livre, "optional");
  if (validation) {
    res.status(422).send(validation);
  } else {
  models.livres
    .update(livre)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  }
};

module.exports = {
  browse,
  read,
  add,
  destroy,
  edit,
};

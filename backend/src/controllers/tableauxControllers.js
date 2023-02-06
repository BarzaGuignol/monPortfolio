const models = require("../models");

const validate = require("../services/tableaux");

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

const read = (req, res) => {
  models.tableaux
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
  const tableau = req.body;

  const error = validate(tableau, "required");
  if (!error) {
  models.tableaux
    .insert(tableau)
    .then(([result]) => {
      res.location(`/tableaux/${result.insertId}`).sendStatus(201);
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
  models.tableaux
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
  const tableau = req.body;

  tableau.id = parseInt(req.params.id, 10);

  const validation = validate(tableau, "optional");
  if (validation) {
    res.status(422).send(validation);
  } else {
  models.tableaux
    .update(tableau)
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

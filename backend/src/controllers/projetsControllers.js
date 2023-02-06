const models = require("../models");

const validate = require("../services/projets");

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

const read = (req, res) => {
  models.projets
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
  const projet = req.body;

  const error = validate(projet, "required");
  if (!error) {
    models.projets
      .insert(projet)
      .then(([result]) => {
        res.location(`/projets/${result.insertId}`).sendStatus(201);
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
  models.projets
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
  const projet = req.body;

  projet.id = parseInt(req.params.id, 10);

  const validation = validate(projet, "optional");
  if (validation) {
    res.status(422).send(validation);
  } else {
    models.projets
      .update(projet)
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
  add,
  destroy,
  read,
  edit,
};

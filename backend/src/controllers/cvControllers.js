const models = require("../models");

const validate = require("../services/experiences");

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

const read = (req, res) => {
  models.experiences
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
  const experience = req.body;

  const error = validate(experience, "required");
  if (!error) {
    models.experiences
      .insert(experience)
      .then(([result]) => {
        res.location(`/experiences/${result.insertId}`).sendStatus(201);
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
  models.experiences
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
  const experience = req.body;

  experience.id = parseInt(req.params.id, 10);

  const validation = validate(experience, "optional");
  if (validation) {
    res.status(422).send(validation);
  } else {
  models.experiences
    .update(experience)
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

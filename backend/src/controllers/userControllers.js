const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyHash, hashPassword } = require("../services/auth");

const browse = (req, res) => {
  models.administrateur
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const validateUser = (req, res) => {
  models.administrateur
    .findOne(req.body)
    .then(async ([user]) => {
      if (user[0]) {
        if (await verifyHash(user[0].motDePasse, req.body.motDePasse)) {
          const myUser = { ...user[0] };
          delete myUser.motDePasse;
          const token = jwt.sign(myUser, process.env.JWT_AUTH_SECRET, {
            expiresIn: "24h",
          });

          res
            .status(201)
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .json(myUser);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;

  models.administrateur
    .insert(user)
    .then(([result]) => {
      res.location(`/admin/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  validateUser,
  add
};
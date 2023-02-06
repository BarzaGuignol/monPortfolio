const Joi = require("joi");
// ajouter au service
const validate = (data, type) => {
  return Joi.object({
    titreLivre: Joi.string().min(3).max(255).presence(type),
    imageLivre: Joi.int().min(3).max(255).presence(type),
    url_boutique: Joi.int().min(3).max(255).presence("optional"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;

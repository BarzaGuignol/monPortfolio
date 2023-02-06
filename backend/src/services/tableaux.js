const Joi = require("joi");
// ajouter au service
const validate = (data, type) => {
  return Joi.object({
    titre: Joi.string().min(3).max(255).presence(type),
    style: Joi.int().min(3).max(255).presence("optional"),
    type: Joi.int().min(3).max(255).presence("optional"),
    auteur: Joi.string().min(3).max(255).presence(type),
    description: Joi.string().min(3).max(255).presence("optional"),
    date: Joi.string().min(10).presence(type),
    url_image: Joi.string().min(10).presence("optional"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;

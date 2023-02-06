const Joi = require("joi");
// ajouter au service
const validate = (data, type) => {
  return Joi.object({
    titre: Joi.string().min(3).max(255).presence(type),
    url_image: Joi.string().min(3).max(255).presence(type),
    description: Joi.string().min(3).max(255).presence(type),
    ulr_github: Joi.string().min(3).max(255).presence(type),
    url_site: Joi.string().min(10).presence("optional"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;

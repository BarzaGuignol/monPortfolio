const Joi = require("joi");
// ajouter au service
const validate = (data, type) => {
  return Joi.object({
    titre: Joi.string().min(3).max(255).presence(type),
    dateDebut: Joi.int().min(3).max(255).presence("optional"),
    dateFin: Joi.int().min(3).max(255).presence(type),
    description: Joi.string().min(3).max(255).presence(type),
    urlImage: Joi.string().min(3).max(255).presence(type),
    impairOuPair: Joi.string().min(10).presence(type),
    competences_id: Joi.string().min(10).presence("optional"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;
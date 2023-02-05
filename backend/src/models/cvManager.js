const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "experiences" });
  }

  findAll() {
    const query = `select e.id, e.titre, e.dateDebut, e.dateFin, e.description, e.url_image, e.impairOuPair, c.nom, c.annees_exp, c.icone from ${this.table} as e
    inner join competences as c on c.id = e.competences_id
    order by e.id desc`;
    const value = [];
    return this.connection.query(query, value);
  }

  insert(experience) {
    return this.connection.query(
      `insert into ${this.table} (titre, dateDebut, dateFin, description, url_image, impairOuPair, competences_id) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        experience.titre,
        experience.dateDebut,
        experience.dateFin,
        experience.description,
        experience.urlImage,
        experience.impairOuPair,
        experience.competencesId,
      ]
    );
  }
}

module.exports = ItemManager;

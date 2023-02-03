const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "experiences" });
  }

  findAll(){
    let query = `select e.id, e.titre, e.dateDebut, e.dateFin, e.description, e.url_image, e.impairOuPair, c.nom, c.annees_exp, c.icone from ${this.table} as e
    inner join competences as c on c.id = e.competences_id`;
    const value = [];
    return this.connection.query(query, value);
  }
}

module.exports = ItemManager;
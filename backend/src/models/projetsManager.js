const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "projets" });
  }

  findAll(){
    let query = `select p.id, p.titre, p.url_image, p.description, p.url_github, p.url_site from ${this.table} as p`;
    const value = [];
    return this.connection.query(query, value);
  }
}

module.exports = ItemManager;
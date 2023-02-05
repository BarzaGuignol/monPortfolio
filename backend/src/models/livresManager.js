const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "livres" });
  }

  findAll() {
    const query = `select l.id, l.titreLivre, l.imageLivre, l.url_boutique from ${this.table} as l`;
    const value = [];
    return this.connection.query(query, value);
  }

  insert(livre) {
    return this.connection.query(
      `insert into ${this.table} (titreLivre, imageLivre, url_boutique) values (?, ?, ?)`,
      [livre.titre, livre.urlImage, livre.urlBoutique]
    );
  }
}

module.exports = ItemManager;

const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "tableaux" });
  }

  findAll() {
    const query = `select t.id, t.titre, t.style, t.type, t.auteur, t.description, t.date, t.url_image from ${this.table} as t`;
    const value = [];
    return this.connection.query(query, value);
  }

  insert(tableau) {
    return this.connection.query(
      `insert into ${this.table} (titre, style, type, auteur, description, date, url_image) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        tableau.titre,
        tableau.style,
        tableau.type,
        tableau.auteur,
        tableau.description,
        tableau.date,
        tableau.urlImage,
      ]
    );
  }
}

module.exports = ItemManager;

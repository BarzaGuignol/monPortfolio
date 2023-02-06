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

  update(tableau) {
    return this.connection.query(
      `update ${this.table} set auteur = ?, date = ?, description = ?, style = ?, titre = ?, type = ?, url_image = ?  where id = ?`,
      [
        tableau.auteur,
        tableau.date,
        tableau.description,
        tableau.style,
        tableau.titre,
        tableau.type,
        tableau.url_image,
        tableau.id,
      ]
    );
  }
}

module.exports = ItemManager;

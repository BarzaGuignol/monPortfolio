const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "projets" });
  }

  findAll() {
    const query = `select p.id, p.titre, p.url_image, p.description, p.url_github, p.url_site from ${this.table} as p`;
    const value = [];
    return this.connection.query(query, value);
  }

  insert(projet) {
    return this.connection.query(
      `insert into ${this.table} (titre, url_image, description, url_github, url_site) values (?, ?, ?, ?, ?)`,
      [
        projet.titre,
        projet.urlImage,
        projet.description,
        projet.urlGithub,
        projet.urlSite,
      ]
    );
  }

  update(projet) {
    return this.connection.query(
      `update ${this.table} set titre = ?, url_image = ?, description = ?, url_github = ?, url_site = ? where id = ?`,
      [
        projet.titre,
        projet.url_image,
        projet.description,
        projet.url_github,
        projet.url_site,
        projet.id,
      ]
    );
  }
}

module.exports = ItemManager;

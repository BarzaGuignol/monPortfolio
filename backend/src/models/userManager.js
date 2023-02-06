const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "administrateur" });
  }

  findOne(user) {
    return this.connection.query(
      `select * from  ${this.table} where identifiant = ?`,
      [user.identifiant]
    );
  }
}
module.exports = UserManager;
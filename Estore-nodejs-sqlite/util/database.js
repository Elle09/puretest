const sqlite3 = require("sqlite3");
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./myDb.sqlite3",
});

module.exports = sequelize;

import { Sequelize } from "sequelize";

const db = new Sequelize("localhost", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

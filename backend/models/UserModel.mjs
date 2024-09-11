import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

const { DataType } = Sequelize;

const Users = db.define(
  "users",
  {
    name: {
      type: DataType.STRING,
    },
    email: {
      type: DataType.STRING,
    },
    password: {
      type: DataType.STRING,
    },
    refresh_toke: {
      type: DataType.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;

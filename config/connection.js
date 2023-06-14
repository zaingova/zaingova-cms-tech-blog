const Sequelize = require("sequelize");
require("dotenv").config();

// sequelize variable -> uses environment variables from .env
// prioritizes JAWSDB
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

// exports sequelize variable
module.exports = sequelize;

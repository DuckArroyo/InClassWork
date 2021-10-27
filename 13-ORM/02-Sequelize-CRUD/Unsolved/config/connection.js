// Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("todolist", "root", "Omega!519", {
      host: "localhost",
      port: 3306,
      dialect: "mysql",
    });

// Exports the connection for other files to use
module.exports = sequelize;

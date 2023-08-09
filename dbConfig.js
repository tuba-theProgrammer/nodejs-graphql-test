const { Sequelize } = require("sequelize");
require('dotenv').config();
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelise = new Sequelize({
    dialect: 'postgres',
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: Number(DB_PORT),
    define: {
      paranoid: true,
    },
  });

  
function init() {
  const Employee = require("./Model/employee");
 
  sequelise
    .sync({
      alter: true,
    })
    .then((res) => {
      console.log("Database connection successful");
    })
    .catch((err) => console.log("Errors", err));
}

async function connect() {
  try {
    await sequelise.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

function close() {
  sequelise.close();
}

module.exports = {
  init,
  connect,
  close,
  sequelise,
};
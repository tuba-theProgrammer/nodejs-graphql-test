const { Sequelize } = require("sequelize");

const sequelise = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
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
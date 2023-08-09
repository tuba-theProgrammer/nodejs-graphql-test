const { Sequelize } = require("sequelize");

const sequelise = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "postgres",
    username: "postgres",
    password: "localhost",
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
const { DataTypes } = require('sequelize');
const db = require("../dbConfig");

const Employee = db.sequelise.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  hire_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updated_at: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  deleted_at: {
    allowNull: true,
    type: DataTypes.DATE,
  },
});

module.exports = Employee;



const { DataTypes,Model } = require('sequelize');

function EmployeeFunc (sequelize) {
  class Employee extends Model {}

  Employee.init(
    {
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

      created_by: {
        type: DataTypes.UUID,
        allowNull: false,
      },

      updated_by: {
        type: DataTypes.UUID,
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
    },
    {
      modelName: 'employee',
      sequelize,
      underscored: true,
    },
  );

  return Employee;
}

module.exports = EmployeeFunc;
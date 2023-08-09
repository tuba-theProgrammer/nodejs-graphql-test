const { GraphQLString, GraphQLNonNull,GraphQLFloat,GraphQLInt } = require("graphql");
const EmployeeType = require("./typeDef");
const { connect } = require("../../dbConfig");
const Employee = require("../../Model/employee");


const createEmployee ={
    type: EmployeeType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        job: { type: GraphQLNonNull(GraphQLString) },
        department: { type: GraphQLNonNull(GraphQLString) },
        salary: { type: GraphQLNonNull(GraphQLFloat) },
        hire_date: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async(parent, args) =>{
        await connect()
        return Employee.create({
          name: args.name,
          job: args.job,
          department: args.department,
          salary: args.salary,
          hire_date: args.hire_date,         
        });
      },
}

const updateEmployee= {
    type: EmployeeType,
    args: {
      id: { type: GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLString },
      job: { type: GraphQLString },
      department: { type: GraphQLString },
      salary: { type: GraphQLFloat },
      hire_date: { type: GraphQLString },
    },
    resolve: async(parent, args) =>{
        await connect()
      return Employee.findByPk(args.id)
        .then(employee => {
          if (!employee) throw new Error('Employee not found');
          return employee.update(args);
        })
        .catch(err => {
          throw new Error(err);
        });
    },
  }


  const  deleteEmployee = {
    type: EmployeeType,
    args: {
      id: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: async(parent, args) =>{
        await connect()
      return Employee.findByPk(args.id)
        .then(employee => {
          if (!employee) throw new Error('Employee not found');
          return employee.destroy();
        })
        .catch(err => {
          throw new Error(err);
        });
    },
  }

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee
}
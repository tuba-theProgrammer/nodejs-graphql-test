const { GraphQLInt, GraphQLObjectType,GraphQLList } = require("graphql");
const { connect } = require("../../dbConfig");
const Employee = require("../../Model/employee");
const EmployeeType = require("./typeDef");




const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      employees: {
        type: new GraphQLList(EmployeeType),
        resolve: async()=> {
            await connect()
          return Employee.findAll();
        },
      },
      employee: {
        type: EmployeeType,
        args: {
          id: { type: GraphQLInt },
        },
        resolve: async(parent, args)=> {
            await connect()
          return Employee.findByPk(args.id);
        },
      },
    },
  });

  module.exports = {
    QueryType
}
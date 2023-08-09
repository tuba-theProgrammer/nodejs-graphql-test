const { GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLFloat} = require("graphql");


const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      job: { type: GraphQLString },
      department: { type: GraphQLString },
      salary: { type: GraphQLFloat },
      hire_date: { type: GraphQLString },
      createdAt:{type: GraphQLString},
      updatedAt:{type: GraphQLString}
      
    }),
})

module.exports = EmployeeType
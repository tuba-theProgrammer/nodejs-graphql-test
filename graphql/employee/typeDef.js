// Import necessary GraphQL types from the "graphql" module
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } = require("graphql");

// Define a GraphQL object type for representing an Employee
const EmployeeType = new GraphQLObjectType({
    name: 'Employee',  // Name of the GraphQL type
    fields: () => ({
        id: { type: GraphQLInt },          // Field representing employee's ID as an integer
        name: { type: GraphQLString },     // Field representing employee's name as a string
        job: { type: GraphQLString },      // Field representing employee's job title as a string
        department: { type: GraphQLString },  // Field representing the department the employee belongs to
        salary: { type: GraphQLFloat },    // Field representing employee's salary as a floating-point number
        hire_date: { type: GraphQLString }, // Field representing the date the employee was hired as a string
    }),
});

// Export the defined EmployeeType to be used in other parts of the application
module.exports = EmployeeType;

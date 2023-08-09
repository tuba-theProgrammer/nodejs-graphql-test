// Import necessary GraphQL types and modules
const { GraphQLInt, GraphQLObjectType, GraphQLList } = require("graphql");
const { connect } = require("../../dbConfig"); // Import the database connection function
const Employee = require("../../Model/employee"); // Import the Employee model
const EmployeeType = require("./typeDef"); // Import the EmployeeType GraphQL schema definition

// Define a GraphQL object type for querying employee data
const QueryType = new GraphQLObjectType({
    name: 'Query',  // Name of the GraphQL type
    fields: {
        employees: {
            type: new GraphQLList(EmployeeType), // Field representing a list of employees
            resolve: async () => {
                await connect();  // Connect to the database
                return Employee.findAll(); // Retrieve and return all employees using the Employee model
            },
        },
        employee: {
            type: EmployeeType, // Field representing a single employee
            args: {
                id: { type: GraphQLInt }, // Argument to specify the employee's ID
            },
            resolve: async (parent, args) => {
                await connect();  // Connect to the database
                return Employee.findByPk(args.id); // Retrieve and return a single employee by their ID using the Employee model
            },
        },
    },
});

// Export the defined QueryType to be used in the GraphQL schema
module.exports = QueryType;

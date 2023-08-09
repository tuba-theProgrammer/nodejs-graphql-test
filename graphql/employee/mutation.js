// Import necessary GraphQL types and modules
const { GraphQLString, GraphQLNonNull, GraphQLFloat, GraphQLInt } = require("graphql");
const EmployeeType = require("./typeDef"); // Import the EmployeeType GraphQL schema definition
const { connect } = require("../../dbConfig"); // Import the database connection function
const Employee = require("../../Model/employee"); // Import the Employee model

// Define a GraphQL mutation for creating a new employee
const createEmployee = {
    type: EmployeeType, // Return type for the mutation
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        job: { type: GraphQLNonNull(GraphQLString) },
        department: { type: GraphQLNonNull(GraphQLString) },
        salary: { type: GraphQLNonNull(GraphQLFloat) },
        hire_date: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
        await connect(); // Connect to the database
        return Employee.create({
            name: args.name,
            job: args.job,
            department: args.department,
            salary: args.salary,
            hire_date: args.hire_date,
        });
    },
};

// Define a GraphQL mutation for updating an existing employee
const updateEmployee = {
    type: EmployeeType, // Return type for the mutation
    args: {
        id: { type: GraphQLNonNull(GraphQLInt) }, // ID of the employee to update
        name: { type: GraphQLString },
        job: { type: GraphQLString },
        department: { type: GraphQLString },
        salary: { type: GraphQLFloat },
        hire_date: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        await connect(); // Connect to the database
        return Employee.findByPk(args.id)
            .then(employee => {
                if (!employee) throw new Error('Employee not found');
                return employee.update(args);
            })
            .catch(err => {
                throw new Error(err);
            });
    },
};

// Define a GraphQL mutation for deleting an employee
const deleteEmployee = {
    type: EmployeeType, // Return type for the mutation
    args: {
        id: { type: GraphQLNonNull(GraphQLInt) }, // ID of the employee to delete
    },
    resolve: async (parent, args) => {
        await connect(); // Connect to the database
        return Employee.findByPk(args.id)
            .then(employee => {
                if (!employee) throw new Error('Employee not found');
                return employee.destroy();
            })
            .catch(err => {
                throw new Error(err);
            });
    },
};

// Export the defined mutations to be used in the GraphQL schema
module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee
};

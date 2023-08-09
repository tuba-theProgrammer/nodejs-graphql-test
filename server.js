// Import necessary modules
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const QueryType = require('./graphql/employee/query');
const MutationType = require('./graphql/employee/mutation');
const db = require('./dbConfig');

// Create an instance of Express
const app = express();

// Initialize the database connection
db.init();

// Define the Mutation schema using GraphQLObjectType
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...MutationType  // Spread the mutation fields from MutationType
  })
});

// Set up Express middleware to handle GraphQL requests
app.use("/graphql", graphqlHTTP({
  graphiql: true,  // Enable the GraphiQL interface for testing
  schema: new GraphQLSchema({
    query: QueryType,       // Set the Query schema
    mutation: Mutation     // Set the Mutation schema
  })
}));

// Define the port to listen on
const PORT = process.env.PORT || 4000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

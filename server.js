const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { QueryType, MutationType } = require('./Schema/schema');
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const Sequelize = require('sequelize'); // Add this import

const app = express();

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
});

app.use('/graphql', graphqlHTTP({
  schema: new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
  }),
  graphiql: true,
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = sequelize;

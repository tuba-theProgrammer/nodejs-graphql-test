const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const  QueryType = require('./graphql/employee/query');
const  MutationType = require('./graphql/employee/mutation');
const db = require('./dbConfig');
const app = express();
db.init()
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


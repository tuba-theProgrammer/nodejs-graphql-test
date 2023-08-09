const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema,GraphQLObjectType } = require('graphql');
const  QueryType = require('./graphql/employee/query');
const  MutationType = require('./graphql/employee/mutation');
const db = require('./dbConfig');
const app = express();
db.init()

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
      ...QueryType
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
      ...MutationType
  })
})

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema: new GraphQLSchema({
      query: Query,
      mutation: Mutation
  })
}))


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


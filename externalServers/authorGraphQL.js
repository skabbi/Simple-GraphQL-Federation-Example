const { authors } = require('../utils/mock.js');;
const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require("@apollo/federation");

/*
  Keywords:
    @key:
      Declaring an entity is done by adding a @key 
      directive to the type definition.
      In this example, the @key directive tells 
      the Apollo query planner that a particular 
      instance of 'Author' can be fetched if you 
      have its 'id'.
*/
const typeDefs = gql `
  type Query {
    authors: [Author]
    author(id: ID!): Author
  }

  type Author @key(fields: "id") {
    id: ID!
    name: String
  }
`;

const resolvers = {
  Query: {
    author: (_, args) => {
      return authors.find(a => a.id === args.id);
    },
    authors: () => {
      return authors;
    }
  },
  User: {
    __resolveReference(object) {
      return authors.find(author => author.id === object.id);
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs,
    resolvers
  }])
});

server.listen(3001).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
const { books, reviews } = require('../utils/mock.js');;
const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require("@apollo/federation");

/*
  Keywords:
    @external:
      Fields marked with @external are declarations 
      of fields that are defined in another service.
*/
const typeDefs = gql `
  type Book {
    id: ID!
    authorId: ID!
    title: String
    review: Float
  }

  extend type Author @key(fields: "id") {
    id: ID! @external 
    books: [Book]
  }
`;

const resolvers = {
  Author: {
    books: (author) => {
      return books.filter(b => b.authorId == author.id)
    }
  },

  Book: {
    title: (book) => {
      return book.title;
    },
    review: (book) => {
      return reviews.find(r => r.bookId === book.id).review;
    },
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs,
    resolvers
  }])
});

server.listen(3002).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
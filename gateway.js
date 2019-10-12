const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "author", url: "http://localhost:3001" },
    { name: "book", url: "http://localhost:3002" }
  ]
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ schema, executor });

  server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
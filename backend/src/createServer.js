const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const resolvers = require("./resolvers");
const db = require("./db");

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;

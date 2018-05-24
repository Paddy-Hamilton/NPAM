const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql", // the auto-generated GraphQL schema of the Prisma API
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
  debug: false, // log all GraphQL queries & mutations sent to the Prisma API
  secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml` (value set in `.env`)
});

module.exports = db;

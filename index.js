const { ApolloServer } = require("apollo-server");
const Db = require("./db").Conn;
const EmployeeAPI = require("./datasources/employees");

const typeDefs = require("./schema.js");

const resolvers = require("./resolvers.js");

const dataSources = () => ({
  employeeAPI: new EmployeeAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
//   introspection: false,
//   playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`GraphQL server is running at ${url}`);
});

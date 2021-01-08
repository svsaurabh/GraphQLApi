const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    employees(id: ID, firstName: String, lastName: String): [Employee]
    employeeById(id: ID): Employee
    projects: [Project]
  }
  type Employee {
    id: ID!
    firstName: String
    lastName: String
    projects: [Project]
  }

  type Project {
    id: ID!
    name: String
    description: String
    employee: Employee
  }
`;

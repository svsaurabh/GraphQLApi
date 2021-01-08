const { Sequelize } = require("sequelize");
const { _ } = require("lodash");
const faker = require("faker");
const Conn = new Sequelize("", "postgres", "password", {
  dialect: "postgres",
  host: "localhost",
});

const Employee = Conn.define("employee", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Project = Conn.define("project", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Employee.hasMany(Project);
Project.belongsTo(Employee);

Conn.sync({ force: true }).then(() => {
  _.times(5, () => {
    return Employee.create({
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
    }).then((employee) => {
      return employee.createProject({
        name: `Project name`,
        description: `${employee.firstName} is working on this project.`,
      });
    });
  });
});

module.exports = { Conn };

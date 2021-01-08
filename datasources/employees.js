const { DataSource } = require("apollo-datasource");
const Db = require("../db").Conn;

class EmployeeAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getEmployees(args) {
    return Db.models.employee.findAll({ where: args });
  }

  getEmployeeById(id) {
    return Db.models.employee.findByPk(id);
  }
}

module.exports = EmployeeAPI;

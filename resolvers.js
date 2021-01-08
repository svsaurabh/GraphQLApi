module.exports = {
  Query: {
    employees: (parent, args, { dataSources }, info) => {
      return dataSources.employeeAPI.getEmployees(args);
    },
    employeeById: (parent, { id }, { dataSources }, info) => {
      return dataSources.employeeAPI.getEmployeeById(id);
    },
    projects: () => {
      return Db.models.project.findAll();
    },
  },
};

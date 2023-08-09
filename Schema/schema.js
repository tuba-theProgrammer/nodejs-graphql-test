const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLInt } = require('graphql');
const EmployeeFunc = require('../Model/employee');

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    job: { type: GraphQLString },
    department: { type: GraphQLString },
    salary: { type: GraphQLFloat },
    hire_date: { type: GraphQLString },
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve() {
        return EmployeeFunc.findAll();
      },
    },
    employee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return EmployeeFunc.findByPk(args.id);
      },
    },
  },
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        job: { type: GraphQLNonNull(GraphQLString) },
        department: { type: GraphQLNonNull(GraphQLString) },
        salary: { type: GraphQLNonNull(GraphQLFloat) },
        hire_date: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return EmployeeFunc.create({
          name: args.name,
          job: args.job,
          department: args.department,
          salary: args.salary,
          hire_date: args.hire_date,
        });
      },
    },
    updateEmployee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        job: { type: GraphQLString },
        department: { type: GraphQLString },
        salary: { type: GraphQLFloat },
        hire_date: { type: GraphQLString },
      },
      resolve(parent, args) {
        return EmployeeFunc.findByPk(args.id)
          .then(employee => {
            if (!employee) throw new Error('Employee not found');
            return employee.update(args);
          })
          .catch(err => {
            throw new Error(err);
          });
      },
    },
    deleteEmployee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        return EmployeeFunc.findByPk(args.id)
          .then(employee => {
            if (!employee) throw new Error('Employee not found');
            return employee.destroy();
          })
          .catch(err => {
            throw new Error(err);
          });
      },
    },
  },
});

module.exports = { QueryType, MutationType };

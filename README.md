
## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. configure db by adding variables in .env file
5. run - node server.js

# nodejs-graphql-test
GraphQL queries and mutations can be perform directly in your web browser using GraphQL Playground or a similar tool. Since we're using the express-graphql package, GraphQL Playground can be access by navigating to http://localhost:4000/graphql in web browser. Here's how CRUD operations can be perform using the GraphQL Playground:

Access the GraphQL Playground:
After starting Node.js server, open web browser and go to http://localhost:4000/graphql.

Perform CRUD Operations:

Create (Mutation - createEmployee):


mutation {
  createEmployee(
    name: "Tuba Asif"
    job: "Developer"
    department: "IT"
    salary: 60000.0
    hire_date: "2023-08-08"
  ) {
    id
    name
    job
    department
    salary
    hire_date
  }
}

Update (Mutation - updateEmployee)

mutation {
  updateEmployee(id: 1, name: "Tuba Rajput") {
    id
    name
    job
    department
    salary
    hire_date
  }
}

Delete (Mutation - deleteEmployee):

mutation {
  deleteEmployee(id: 1) {
    id
    name
    job
    department
    salary
    hire_date
  }
}



Read (Query - employees):

{
  employees {
    id
    name
    job
    department
    salary
    hire_date
  }
}

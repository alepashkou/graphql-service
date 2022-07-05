export const userSchema = `
type User {
  _id: ID!
  firstName: String
  lastName: String
  password: String!
  email: String!
}
type Query {
  user(id: String!): User
}
type Mutation {
  register(firstName: String!, lastName: String!,  password: String!, email: String!): User
}`;

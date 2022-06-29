export const userSchema = `
type User {
  _id: ID!
  firstName: String
  secondName: String
  middleName: String
  password: String!
  email: String!
}
type Query {
  user(id: String): User
}`;
export const jwtSchema = `
type Query {
  jwt(email: String!, password: String!): String
}`;

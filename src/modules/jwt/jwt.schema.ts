export const jwtSchema = `
type Token {
  jwt: String
}
type Query {
  login(email: String, password: String): Token
}`;

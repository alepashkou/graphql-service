export const bandSchema = `
type Band {
  _id: ID!
  name: String
  origin: String
  website: String
  genres: String
}
type Query {
  band(id: String!): Band
  bands: [Band]
}
`;

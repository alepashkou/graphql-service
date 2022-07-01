export const bandSchema = `
type Band {
  _id: ID!
  name: String
  origin: String
  website: String
  genres: [Genre]
}
type Query {
  band(id: String!): Band
  bands(limit: Int, offset:Int): [Band]
}
`;

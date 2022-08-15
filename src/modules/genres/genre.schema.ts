export const genreSchema = `
type Genre {
  _id: ID!
  name: String
  description: String
  country: String
  year: Int
}
type Query {
  genre(id: String!): Genre
  genres(limit: Int, offset: Int): [Genre]
}
type Mutation {
  createGenre(name: String!, description: String, country: String, year: Int): Genre
  deleteGenre(id: String!): DeleteResponse
  updateGenre(id: String!, name: String, description: String, country: String, year: Int): Genre
}`;

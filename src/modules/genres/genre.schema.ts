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
  genres: [Genre]
}`;

export const trackSchema = `
type Track {
  _id: ID!
  title: String
  album: Album
  artists: [Artist]
  bands: [Band]
  duration: Int
  released: Int
  genres: [Genre]
}
type Query {
  track(id: String!): Track
  tracks(limit: Int, offset: Int): [Track]
}`;

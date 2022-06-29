export const trackSchema = `
type Track {
  _id: ID!
  title: String
  albums: String
  bands: [Band]
  duration: Int
  released: Int
  genres: [Genre]
}
type Query {
  track(id: String): Track
  tracks: [Track]
}`;

export const albumSchema = `
type Album {
    _id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
  type Query {
    album(id: String): Album
    albums: [Album]
  }
`;

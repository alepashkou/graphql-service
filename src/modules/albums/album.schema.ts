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
  album(id: String!): Album
  albums(limit: Int, offset: Int): [Album]
}
type Mutation {
  createAlbum(name: String!, released: Int, artistsIds: [String], bandsIds: [String], trackIds: [String], genresIds: [String], image: String): Album
  deleteAlbum(id: String!): DeleteResponse
  updateAlbum(id: String!, name: String, released: Int, artistsIds: [String], bandsIds: [String], trackIds: [String], genresIds: [String], image: String): Album 
}
`;

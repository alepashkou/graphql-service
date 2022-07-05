export const favouriteSchema = `
type Favourites {
  _id: ID!
  userId: ID!
  bands: [Band]
  genres: [Genre]
  artists: [Artist]
  tracks: [Track]
}
type Query{
  favourites: Favourites
}`;

export const favouriteSchema = `
type Favourites {
  _id: ID!
  userId: ID!
  bands: [ID]
  genres: [ID]
  artists: [ID]
  tracks: [ID]
}
type Query{
  favourites: Favourites
}`;

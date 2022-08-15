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
}
type Mutation{
  addTrackToFavourites(trackId: ID!): Favourites
  addBandToFavourites(bandId: ID!): Favourites
  addArtistToFavourites(artistId: ID!): Favourites
  addGenreToFavourites(genreId: ID!): Favourites
}`;

export const artistSchema = `
type Artist {
  _id: ID!
  firstName: String
  secondName: String
  middleName: String
  birthDate: String
  birthPlace: String
  country: String
  bands: [ID]
  instruments: String
}
type Query {
  artist(id: String): Artist
  artists: [Artist]
}`;

export const artistSchema = `
type Query {
  hello: String
  artists: [Artist]
}
type Artist {
  id: ID!
  firstName: String
  secondName: String
  middleName: String
  birthDate: String
  birthPlace: String
  country: String
  bands: [ID]
  instruments: String
}`;

export const bandSchema = `
type Band {
  _id: ID!
  name: String
  origin: String
  website: String
  members: [Member]
  genres: [Genre]
}
type Member {
  artist: String
  instrument: String
  years: [Int]
}
input inputMember {
  artist: String
  instrument: String
  years: [Int]
}
type Query {
  band(id: String!): Band
  bands(limit: Int, offset:Int): [Band]
}
type Mutation {
  createBand(name: String!, origin: String, members: [inputMember], website: String, genresIds:[String]): Band
  deleteBand(id: String!): DeleteResponse
  updateBand(id: String!, name: String!, origin: String, members: [inputMember], website: String, genresIds:[String]): Band
}
`;

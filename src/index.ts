import 'dotenv/config';
import { ApolloServer, AuthenticationError, gql } from 'apollo-server';
import { allSchemas } from './modules/allSchemas.js';
import { artistsResolver } from './modules/artists/resolver.js';

const PORT: number = +process.env.PORT || 3000;

const typeDefs = gql`
  ${allSchemas}
`;
const resolvers = {
  Query: {
    hello: () => 'books',
    ...artistsResolver,
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    if (!token) throw new AuthenticationError('you must be logged in');
    return { token };
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server start at ${url}`);
});

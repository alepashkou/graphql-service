import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server';
import { allSchemas } from './modules/allSchemas.js';
import { allServices } from './modules/allServices.js';
import { bandsResolver } from './modules/bands/resolver.js';
import { genresResolver } from './modules/genres/resolver.js';
import { trackResolver } from './modules/tracks/resolver.js';
import { usersResolver } from './modules/users/resolver.js';
import { jwtResolver } from './modules/jwt/resolver.js';
import { allQueries } from './modules/allQueries.js';

const PORT: number = +process.env.PORT || 3000;

const typeDefs = gql`
  ${allSchemas}
`;
const resolvers = {
  Query: {
    ...allQueries,
    ...bandsResolver,
    ...genresResolver,
    ...trackResolver,
    ...usersResolver,
    ...jwtResolver,
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
  dataSources: () => {
    return allServices;
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server start at ${url}`);
});

import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server';
import { allSchemas } from './modules/allSchemas.js';
import { artistsResolver } from './modules/artists/resolver.js';
import { allServices } from './modules/allServices.js';
import { albumResolver } from './modules/albums/resolver.js';

const PORT: number = +process.env.PORT || 3000;

const typeDefs = gql`
  ${allSchemas}
`;
const resolvers = {
  Query: {
    ...artistsResolver,
    ...albumResolver,
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

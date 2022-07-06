import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server';
import { allSchemas } from './modules/allSchemas.js';
import { allServices } from './modules/allServices.js';

import { allResolvers } from './modules/allResolvers.js';

const PORT: number = +process.env.PORT || 3000;

const typeDefs = gql`
  ${allSchemas}
`;
const resolvers = {
  ...allResolvers,
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
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

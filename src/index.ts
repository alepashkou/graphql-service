import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';
import { schemaQueries } from './modules/schemaQueries.js';
import { allSchemas } from './modules/allSchemas.js';

const PORT: number = +process.env.PORT || 3000;

const schema: GraphQLSchema = buildSchema(`${allSchemas}${schemaQueries}`);

const root = {
  hello: () => 'Hello world!',
  artists: () => [
    { id: 1, firstName: 'John', secondName: 'Smith' },
    { id: 2, firstName: 'John', secondName: 'Smith' },
    { id: 3, firstName: 'John', secondName: 'Smith' },
  ],
};

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/graphql`));

import { albumQueriesResolver } from './albums/resolvers/album.queries.js';
import { artistsQueriesResolver } from './artists/resolvers/artist.queries.js';

export const allQueries = {
  ...albumQueriesResolver,
  ...artistsQueriesResolver,
};

import { albumQueriesResolver } from './albums/resolvers/album.queries.js';
import { artistsQueriesResolver } from './artists/resolvers/artist.queries.js';
import { bandsQueriesResolver } from './bands/resolvers/band.queries.js';
import { genresQueriesResolver } from './genres/resolvers/genre.queries.js';
import { jwtQueriesResolver } from './jwt/resolvers/jwt.queries.js';
import { trackQueriesResolver } from './tracks/resolvers/track.queries.js';
import { usersQueriesResolver } from './users/resolvers/users.queries.js';

export const allQueries = {
  ...albumQueriesResolver,
  ...artistsQueriesResolver,
  ...bandsQueriesResolver,
  ...genresQueriesResolver,
  ...jwtQueriesResolver,
  ...trackQueriesResolver,
  ...usersQueriesResolver,
};

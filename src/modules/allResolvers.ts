import { albumResolver } from './albums/album.resolver.js';
import { artistResolver } from './artists/artist.resolver.js';
import { bandResolver } from './bands/band.resolver.js';
import { favouritesResolver } from './favourites/favourites.resolver.js';
import { genreResolver } from './genres/genre.resolver.js';
import { jwtResolver } from './jwt/jwt.resolver.js';
import { trackResolver } from './tracks/track.resolver.js';
import { userResolver } from './users/user.resolver.js';

export const allResolvers = {
  Query: {
    ...albumResolver.Query,
    ...artistResolver.Query,
    ...bandResolver.Query,
    ...favouritesResolver.Query,
    ...genreResolver.Query,
    ...jwtResolver.Query,
    ...trackResolver.Query,
    ...userResolver.Query,
  },
  Mutation: {
    ...albumResolver.Mutation,
    ...artistResolver.Mutation,
    ...genreResolver.Mutation,
    ...bandResolver.Mutation,
    ...userResolver.Mutation,
    ...trackResolver.Mutation,
    ...favouritesResolver.Mutation,
  },
  Artist: {
    ...artistResolver.Artist,
  },
  Band: {
    ...bandResolver.Band,
  },
  Album: {
    ...albumResolver.Album,
  },
  Track: {
    ...trackResolver.Track,
  },
  Favourites: {
    ...favouritesResolver.Favourites,
  },
  Member: {
    ...bandResolver.Member,
  },
};

import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server';
import { allSchemas } from './modules/allSchemas.js';
import { allResolvers } from './modules/allResolvers.js';
import { ArtistService } from './modules/artists/artist.service.js';
import { AlbumService } from './modules/albums/album.service.js';
import { BandsService } from './modules/bands/band.service.js';
import { GenresService } from './modules/genres/genre.service.js';
import { TracksService } from './modules/tracks/track.service.js';
import { UsersService } from './modules/users/user.service.js';
import { JwtService } from './modules/jwt/jwt.service.js';
import { FavouritesService } from './modules/favourites/favourites.service.js';

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
  cache: 'bounded',
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
  dataSources: () => {
    return {
      artistsService: new ArtistService(),
      albumsService: new AlbumService(),
      bandsService: new BandsService(),
      genresService: new GenresService(),
      tracksService: new TracksService(),
      usersService: new UsersService(),
      jwtService: new JwtService(),
      favouritesService: new FavouritesService(),
    };
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server start at ${url}`);
});

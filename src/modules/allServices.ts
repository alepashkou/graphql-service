import { AlbumService } from './albums/service.js';
import { ArtistService } from './artists/service.js';
import { BandsService } from './bands/service.js';
import { GenresService } from './genres/service.js';
import { JwtService } from './jwt/service.js';
import { TracksService } from './tracks/service.js';
import { UsersService } from './users/service.js';

export const allServices = {
  artistsService: new ArtistService(),
  albumsService: new AlbumService(),
  bandsService: new BandsService(),
  genresService: new GenresService(),
  tracksService: new TracksService(),
  usersService: new UsersService(),
  jwtService: new JwtService(),
};

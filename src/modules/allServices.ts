import { AlbumService } from './albums/album.service.js';
import { ArtistService } from './artists/artist.service.js';
import { BandsService } from './bands/band.service.js';
import { GenresService } from './genres/genre.service.js';
import { JwtService } from './jwt/jwt.service.js';
import { TracksService } from './tracks/track.service.js';
import { UsersService } from './users/user.service.js';

export const allServices = {
  artistsService: new ArtistService(),
  albumsService: new AlbumService(),
  bandsService: new BandsService(),
  genresService: new GenresService(),
  tracksService: new TracksService(),
  usersService: new UsersService(),
  jwtService: new JwtService(),
};

import { AlbumService } from './albums/service.js';
import { ArtistService } from './artists/service.js';
export const allServices = {
  artistsService: new ArtistService(),
  albumsService: new AlbumService(),
};

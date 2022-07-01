export const trackResolver = {
  Query: {
    tracks: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.tracksService.getAllTracks(limit, offset);
    },
    track: async (_, { id }, { dataSources }) => {
      return dataSources.tracksService.getTrack(id);
    },
  },
  Track: {
    album: async (parent, _, { dataSources }) => {
      const album = dataSources.albumsService.getAlbum(parent.albumId);
      return album;
    },
    artists(parent, _, { dataSources }) {
      const artists = parent.artistsIds.map((id) =>
        dataSources.artistsService.getArtist(id)
      );
      return artists;
    },
    bands(parent, _, { dataSources }) {
      const bands = parent.bandsIds.map((id) =>
        dataSources.bandsService.getBand(id)
      );
      return bands;
    },
    genres(parent, _, { dataSources }) {
      const genres = parent.genresIds.map((id) =>
        dataSources.genresService.getGenre(id)
      );
      return genres;
    },
  },
};

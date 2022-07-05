export const albumResolver = {
  Query: {
    albums: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.albumsService.getAllAlbums(limit, offset);
    },
    album: async (_, { id }, { dataSources }) => {
      return dataSources.albumsService.getAlbum(id);
    },
  },
  Mutation: {
    createAlbum: async (_, data, { dataSources }) => {
      return dataSources.albumsService.createAlbum(data);
    },
    deleteAlbum: async (_, { id }, { dataSources }) => {
      return dataSources.albumsService.deleteAlbum(id);
    },
    updateAlbum: async (_, data, { dataSources }) => {
      return dataSources.albumsService.updateAlbum(data);
    },
  },
  Album: {
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
    tracks(parent, _, { dataSources }) {
      const tracks = parent.trackIds.map((id) =>
        dataSources.tracksService.getTrack(id)
      );
      return tracks;
    },
    genres(parent, _, { dataSources }) {
      const genres = parent.genresIds.map((id) =>
        dataSources.genresService.getGenre(id)
      );
      return genres;
    },
  },
};

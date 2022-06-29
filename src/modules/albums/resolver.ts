export const albumResolver = {
  albums: async (_, __, { dataSources }) => {
    return dataSources.albumsService.getAllAlbums();
  },
  album: async (_, { id }, { dataSources }) => {
    return dataSources.albumsService.getAlbum(id);
  },
};

export const albumQueriesResolver = {
  albums: async (_, { limit, offset }, { dataSources }) => {
    return dataSources.albumsService.getAllAlbums(limit, offset);
  },
  album: async (_, { id }, { dataSources }) => {
    return dataSources.albumsService.getAlbum(id);
  },
};

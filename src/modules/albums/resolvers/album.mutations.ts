export const albumMutationsResolver = {
  createAlbum: async (_, data, { dataSources }) => {
    return dataSources.albumsService.createAlbum(data);
  },
  deleteAlbum: async (_, { id }, { dataSources }) => {
    return dataSources.albumsService.deleteAlbum(id);
  },
  updateAlbum: async (_, data, { dataSources }) => {
    return dataSources.albumsService.updateAlbum(data);
  },
};

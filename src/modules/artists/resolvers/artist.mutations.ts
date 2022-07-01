export const artistMutationsResolver = {
  createArtist: async (_, data, { dataSources }) => {
    return dataSources.artistsService.createArtist(data);
  },
  deleteArtist: async (_, { id }, { dataSources }) => {
    return dataSources.artistsService.deleteArtist(id);
  },
  updateArtist: async (_, data, { dataSources }) => {
    return dataSources.artistsService.updateArtist(data);
  },
};

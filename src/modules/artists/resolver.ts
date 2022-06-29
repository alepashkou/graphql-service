export const artistsResolver = {
  artists: async (_, __, { dataSources }) => {
    return dataSources.artistsService.getAllArtists();
  },
  artist: async (_, { id }, { dataSources }) => {
    return dataSources.artistsService.getArtist(id);
  },
};

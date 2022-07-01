export const artistsQueriesResolver = {
  artists: async (_, { limit, offset }, { dataSources }) => {
    return dataSources.artistsService.getAllArtists(limit, offset);
  },
  artist: async (_, { id }, { dataSources }) => {
    return dataSources.artistsService.getArtist(id);
  },
};

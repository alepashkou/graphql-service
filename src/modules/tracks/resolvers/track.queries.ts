export const trackQueriesResolver = {
  tracks: async (_, { limit, offset }, { dataSources }) => {
    return dataSources.tracksService.getAllTracks(limit, offset);
  },
  track: async (_, { id }, { dataSources }) => {
    return dataSources.tracksService.getTrack(id);
  },
};

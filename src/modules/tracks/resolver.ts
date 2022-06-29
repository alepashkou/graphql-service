export const trackResolver = {
  tracks: async (_, __, { dataSources }) => {
    return dataSources.tracksService.getAllTracks();
  },
  track: async (_, { id }, { dataSources }) => {
    return dataSources.tracksService.getTrack(id);
  },
};

export const bandsQueriesResolver = {
  bands: async (_, { limit, offset }, { dataSources }) => {
    return dataSources.bandsService.getAllBands(limit, offset);
  },
  band: async (_, { id }, { dataSources }) => {
    return dataSources.bandsService.getBand(id);
  },
};

export const bandsResolver = {
  bands: async (_, __, { dataSources }) => {
    return dataSources.bandsService.getAllBands();
  },
  band: async (_, { id }, { dataSources }) => {
    return dataSources.bandsService.getBand(id);
  },
};

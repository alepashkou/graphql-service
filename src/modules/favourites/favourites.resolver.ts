export const favouritesResolver = {
  Query: {
    favourites: async (_, __, { dataSources, token }) => {
      return dataSources.favouritesService.favourites(token);
    },
  },
};

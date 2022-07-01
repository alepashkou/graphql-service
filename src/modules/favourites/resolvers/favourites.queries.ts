export const favouritesQueriesResolver = {
  favourites: async (_, __, { dataSources, token }) => {
    return dataSources.favouritesService.favourites(token);
  },
};

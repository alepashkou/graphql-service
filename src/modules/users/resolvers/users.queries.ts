export const usersQueriesResolver = {
  user: async (_, { id }, { dataSources }) => {
    return dataSources.usersService.getUser(id);
  },
};

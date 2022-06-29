export const usersResolver = {
  user: async (_, { id }, { dataSources }) => {
    return dataSources.usersService.getUser(id);
  },
};

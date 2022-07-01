export const userResolver = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      return dataSources.usersService.getUser(id);
    },
  },
};

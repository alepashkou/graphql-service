export const jwtResolver = {
  Query: {
    jwt: async (_, { email, password }, { dataSources }) => {
      return dataSources.jwtService.login(email, password);
    },
  },
};

export const jwtResolver = {
  login: async (_, { email, password }, { dataSources }) => {
    return dataSources.jwtService.login(email, password);
  },
};

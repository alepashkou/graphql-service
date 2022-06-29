export const jwtQueriesResolver = {
  login: async (_, { email, password }, { dataSources }) => {
    return dataSources.jwtService.login(email, password);
  },
};

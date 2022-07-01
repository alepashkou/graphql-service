export const jwtQueriesResolver = {
  jwt: async (_, { email, password }, { dataSources }) => {
    return dataSources.jwtService.login(email, password);
  },
};

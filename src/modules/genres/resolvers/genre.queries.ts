export const genresQueriesResolver = {
  genres: async (_, { limit, offset }, { dataSources }) => {
    return dataSources.genresService.getAllGenres(limit, offset);
  },
  genre: async (_, { id }, { dataSources }) => {
    return dataSources.genresService.getGenre(id);
  },
};

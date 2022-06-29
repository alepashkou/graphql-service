export const genresQueriesResolver = {
  genres: async (_, __, { dataSources }) => {
    return dataSources.genresService.getAllGenres();
  },
  genre: async (_, { id }, { dataSources }) => {
    return dataSources.genresService.getGenre(id);
  },
};

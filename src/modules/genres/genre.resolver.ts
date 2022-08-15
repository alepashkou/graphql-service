export const genreResolver = {
  Query: {
    genres: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.genresService.getAllGenres(limit, offset);
    },
    genre: async (_, { id }, { dataSources }) => {
      return dataSources.genresService.getGenre(id);
    },
  },
  Mutation: {
    createGenre: async (_, data, { dataSources }) => {
      return dataSources.genresService.createGenre(data);
    },
    deleteGenre: async (_, { id }, { dataSources }) => {
      return dataSources.genresService.deleteGenre(id);
    },
    updateGenre: async (_, data, { dataSources }) => {
      return dataSources.genresService.updateGenre(data);
    },
  },
};

export const bandResolver = {
  Query: {
    bands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsService.getAllBands(limit, offset);
    },
    band: async (_, { id }, { dataSources }) => {
      return dataSources.bandsService.getBand(id);
    },
  },
  Band: {
    genres: async (parent, _, { dataSources }) => {
      const genres = parent.genresIds.map((id) =>
        dataSources.genresService.getGenre(id)
      );
      return genres;
    },
  },
};

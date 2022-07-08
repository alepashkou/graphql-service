export const bandResolver = {
  Query: {
    bands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsService.getAllBands(limit, offset);
    },
    band: async (_, { id }, { dataSources }) => {
      return dataSources.bandsService.getBand(id);
    },
  },
  Mutation: {
    createBand: async (_, data, { dataSources }) => {
      return dataSources.bandsService.createBand(data);
    },
    deleteBand: async (_, { id }, { dataSources }) => {
      return dataSources.bandsService.deleteBand(id);
    },
    updateBand: async (_, data, { dataSources }) => {
      return dataSources.bandsService.updateBand(data);
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
  Member: {
    artist: async (parent, _, { dataSources }) => {
      const artist = await dataSources.artistsService.getArtist(parent.artist);
      return artist;
    },
  },
};

export const artistResolver = {
  Query: {
    artists: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.artistsService.getAllArtists(limit, offset);
    },
    artist: async (_, { id }, { dataSources }) => {
      return dataSources.artistsService.getArtist(id);
    },
  },
  Mutation: {
    createArtist: async (_, data, { dataSources }) => {
      return dataSources.artistsService.createArtist(data);
    },
    deleteArtist: async (_, { id }, { dataSources }) => {
      return dataSources.artistsService.deleteArtist(id);
    },
    updateArtist: async (_, data, { dataSources }) => {
      return dataSources.artistsService.updateArtist(data);
    },
  },
  Artist: {
    bands(parent, _, { dataSources }) {
      const band = parent.bandsIds.map((id) =>
        dataSources.bandsService.getBand(id)
      );
      return band;
    },
  },
};

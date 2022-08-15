export const favouritesResolver = {
  Query: {
    favourites: async (_, __, { dataSources, token }) => {
      return dataSources.favouritesService.favourites(token);
    },
  },
  Mutation: {
    addTrackToFavourites: async (_, { trackId }, { dataSources }) => {
      return dataSources.favouritesService.addTrackToFavourites(trackId);
    },
    addBandToFavourites: async (_, { bandId }, { dataSources }) => {
      return dataSources.favouritesService.addBandToFavourites(bandId);
    },
    addArtistToFavourites: async (_, { artistId }, { dataSources }) => {
      return dataSources.favouritesService.addArtistToFavourites(artistId);
    },
    addGenreToFavourites: async (_, { genreId }, { dataSources }) => {
      return dataSources.favouritesService.addGenreToFavourites(genreId);
    },
  },
  Favourites: {
    artists(parent, _, { dataSources }) {
      const artists = parent.artistsIds.map((id) =>
        dataSources.artistsService.getArtist(id)
      );
      return artists;
    },
    bands(parent, _, { dataSources }) {
      const bands = parent.bandsIds.map((id) =>
        dataSources.bandsService.getBand(id)
      );
      return bands;
    },
    tracks(parent, _, { dataSources }) {
      const tracks = parent.tracksIds.map((id) =>
        dataSources.tracksService.getTrack(id)
      );
      return tracks;
    },
    genres(parent, _, { dataSources }) {
      const genres = parent.genresIds.map((id) =>
        dataSources.genresService.getGenre(id)
      );
      return genres;
    },
  },
};

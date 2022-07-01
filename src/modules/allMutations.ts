import { albumMutationsResolver } from './albums/resolvers/album.mutations.js';
import { artistMutationsResolver } from './artists/resolvers/artist.mutations.js';

export const allMutations = {
  ...albumMutationsResolver,
  ...artistMutationsResolver,
};

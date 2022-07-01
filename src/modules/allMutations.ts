import { albumMutationsResolver } from './albums/resolvers/album.mutations.js';

export const allMutations = {
  ...albumMutationsResolver,
};

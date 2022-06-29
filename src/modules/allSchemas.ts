import { artistSchema } from './artists/artist.schema.js';
import { albumSchema } from './albums/album.schema.js';
import { bandSchema } from './bands/schema.js';
import { genreSchema } from './genres/schema.js';
import { favouriteSchema } from './favourites/schema.js';
import { userSchema } from './users/schema.js';
import { trackSchema } from './tracks/schema.js';
import { jwtSchema } from './jwt/schema.js';

export const allSchemas = `
${artistSchema}
${albumSchema}
${bandSchema}
${genreSchema}
${favouriteSchema}
${userSchema}
${trackSchema}
${jwtSchema}
`;

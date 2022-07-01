import { artistSchema } from './artists/artist.schema.js';
import { albumSchema } from './albums/album.schema.js';
import { bandSchema } from './bands/band.schema.js';
import { genreSchema } from './genres/genre.schema.js';
import { favouriteSchema } from './favourites/favourites.schema.js';
import { userSchema } from './users/user.schema.js';
import { trackSchema } from './tracks/track.schema.js';
import { jwtSchema } from './jwt/jwt.schema.js';

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

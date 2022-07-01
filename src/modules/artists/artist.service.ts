import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getAllArtists(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getArtist(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

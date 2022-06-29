import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getAllArtists() {
    const data = await this.get('');
    return data.items;
  }
  async getArtist(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }
  async getAllAlbums(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getAlbum(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

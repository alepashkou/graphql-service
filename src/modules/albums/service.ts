import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAllAlbums() {
    const data = await this.get('');
    return data.items;
  }
  async getAlbum(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

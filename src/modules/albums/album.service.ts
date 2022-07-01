import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }
  async getAllAlbums(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getAlbum(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
  async createAlbum(data) {
    const response = await this.post('', data);
    return response;
  }
  async deleteAlbum(id) {
    const response = await this.delete('/' + id);
    return response;
  }
  async updateAlbum(data) {
    const requestData = Object.assign({}, data);
    delete requestData.id;
    const response = await this.put('/' + data.id, requestData);
    return response;
  }
}

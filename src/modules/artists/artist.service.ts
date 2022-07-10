import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }
  async getAllArtists(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getArtist(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
  async createArtist(data) {
    const response = await this.post('', data);
    return response;
  }
  async deleteArtist(id) {
    const response = await this.delete('/' + id);
    return response;
  }
  async updateArtist(data) {
    const requestData = Object.assign({}, data);
    delete requestData.id;
    const response = await this.put('/' + data.id, requestData);
    return response;
  }
}

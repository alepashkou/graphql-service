import { RESTDataSource } from 'apollo-datasource-rest';

export class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }
  async getAllGenres(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getGenre(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
  async createGenre(data) {
    const response = await this.post('', data);
    return response;
  }
  async deleteGenre(id) {
    const response = await this.delete('/' + id);
    return response;
  }
  async updateGenre(data) {
    const requestData = Object.assign({}, data);
    delete requestData.id;
    const response = await this.put('/' + data.id, requestData);
    return response;
  }
}

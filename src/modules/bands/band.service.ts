import { RESTDataSource } from 'apollo-datasource-rest';

export class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }
  async getAllBands(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getBand(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
  async createBand(data) {
    const response = await this.post('', data);
    return response;
  }
  async deleteBand(id) {
    const response = await this.delete('/' + id);
    return response;
  }
  async updateBand(data) {
    const requestData = Object.assign({}, data);
    delete requestData.id;
    const response = await this.put('/' + data.id, requestData);
    return response;
  }
}

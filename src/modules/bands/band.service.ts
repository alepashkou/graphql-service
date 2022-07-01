import { RESTDataSource } from 'apollo-datasource-rest';

export class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  async getAllBands(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getBand(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

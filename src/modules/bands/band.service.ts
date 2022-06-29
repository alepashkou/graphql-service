import { RESTDataSource } from 'apollo-datasource-rest';

export class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  async getAllBands() {
    const data = await this.get('');
    return data.items;
  }
  async getBand(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

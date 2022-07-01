import { RESTDataSource } from 'apollo-datasource-rest';

export class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  async getAllGenres(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getGenre(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

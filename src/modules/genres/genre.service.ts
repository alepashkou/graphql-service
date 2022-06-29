import { RESTDataSource } from 'apollo-datasource-rest';

export class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  async getAllGenres() {
    const data = await this.get('');
    return data.items;
  }
  async getGenre(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

import { RESTDataSource } from 'apollo-datasource-rest';

export class UsersService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUser(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
  async register(data) {
    const responce = await this.post('register', data);
    return responce;
  }
}

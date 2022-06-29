import { RESTDataSource } from 'apollo-datasource-rest';

export class JwtService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }
  async login(email, password) {
    const data = await this.post(`/login`, {
      email,
      password,
    });
    return data;
  }
}

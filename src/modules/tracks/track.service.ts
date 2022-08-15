import { RESTDataSource } from 'apollo-datasource-rest';

export class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }
  async getAllTracks(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getTrack(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
  async createTrack(data) {
    const response = await this.post('', data);
    return response;
  }
  async deleteTrack(id) {
    const response = await this.delete('/' + id);
    return response;
  }
  async updateTrack(data) {
    const requestData = Object.assign({}, data);
    delete requestData.id;
    const response = await this.put('/' + data.id, requestData);
    return response;
  }
}

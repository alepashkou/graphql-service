import { RESTDataSource } from 'apollo-datasource-rest';

export class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getAllTracks(limit = 5, offset = 0) {
    const data = await this.get('', { limit: limit, offset: offset });
    return data.items;
  }
  async getTrack(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

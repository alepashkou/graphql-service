import { RESTDataSource } from 'apollo-datasource-rest';

export class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getAllTracks() {
    const data = await this.get('');
    return data.items;
  }
  async getTrack(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

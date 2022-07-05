import { RESTDataSource } from 'apollo-datasource-rest';

export class FavouritesService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }
  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }
  async favourites(token: String) {
    if (token) {
      const data = await this.get('');
      return data;
    } else {
      return null;
    }
  }
  async addTrackToFavourites(trackId: String) {
    const newData = await this.put('/add', {
      type: 'tracks',
      id: trackId,
    });
    return newData;
  }
}

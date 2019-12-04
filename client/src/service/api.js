import axios from 'axios';

const alerter = {
  message: msg => console.log(msg),
  error: err => console.log(err)
};

class apiHandler {
  constructor() {
    this.gamesEndpoint = '/api/games';
  }

  async fetch(url = '', method = 'get', body, config) {
    try {
      let result = await axios({
        url: this.gamesEndpoint + '/' + url,
        headers: config,
        data: body,
        method
      });

      if (!process.env.NODE_ENV) {
        console.log(result);
      }

      return result.data.data;
    } catch (error) {
      alerter.error(error);
    }
  }

  async addGames(appId) {
    await this.fetch(appId, 'post');
    alerter.message('Added game to data');
  }

  async getGames() {
    const data = await this.fetch();
    return data;
  }

  async getGame(id) {
    const data = await this.fetch(id, 'post');
    return data;
  }

  async updateGame(id) {
    await this.fetch('update/' + id, 'post');
    alerter.message('Game status updated');
  }

  async deleteGame(id) {
    await this.fetch(id, 'delete');
    alerter.message('Game deleted');
  }
}

export const ApiHandler = new apiHandler();

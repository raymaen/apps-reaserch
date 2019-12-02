import { scrapeGame } from './scraper.provider';
import { Game } from '../models/Game';

class gamesProvider {
  async createGame(appId) {
    try {
      const game = await scrapeGame(appId);
      game['status'] = 'Not sent';
      await Game.create(game);
    } catch (error) {
      throw new error(error);
    }
  }

  async getGames() {
    try {
      return await Game.find({});
    } catch (error) {
      throw new error(error);
    }
  }

  async getGame(id) {
    try {
      return await Game.findById(id);
    } catch (error) {
      throw new error(error);
    }
  }

  async updateGame(id, status) {
    try {
      const game = await Game.findById(id);
      game.status = status;
      await Game.findByIdAndUpdate(id, game);
    } catch (error) {
      throw new error(error);
    }
  }

  async deleteGame(id) {
    try {
      await Game.findOneAndDelete(id);
    } catch (error) {
      throw new error(error);
    }
  }

  async deleteAll() {
    try {
      await Game.collection.drop();
      console.log('Dropped all games');
    } catch (error) {
      throw new error(error);
    }
  }
}

export const GamesProvider = new gamesProvider();

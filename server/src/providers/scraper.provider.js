import scraper from 'google-play-scraper';
import { GameDataKeys } from '../models/Game';
import { unixToDate } from '../util/functions';

export const scrapeGame = async appId => {
  const data = await scraper.app({ appId });
  const game = {};

  GameDataKeys.forEach(field => {
    game[field] = data[field];
    if (field === 'updated') {
      game['updatedTs'] = data[field];
      game[field] = unixToDate(data[field]);
    }
  });

  return game;
};

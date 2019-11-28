import express from 'express';
import { GamesProvider } from '../providers/games.provider';
const Router = express.Router();

/**
 * @description Get all games
 */
Router.get('/', async (req, res) => {
  try {
    const data = await GamesProvider.getGames();
    res.json({ data });
  } catch (error) {
    res.status(400);
  }
});

/**
 * @description Create new game
 */
Router.post('/:id', async (req, res) => {
  const appId = req.params.id;
  try {
    await GamesProvider.createGame(appId);
    res.sendStatus(200);
  } catch (error) {
    res.status(500);
  }
});

/**
 * @description Get game by id
 */
Router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await GamesProvider.getGame(id);
    res.status({ data });
  } catch (error) {
    res.status(500);
  }
});

/**
 * @description Update game status
 */
Router.post('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await GamesProvider.updateGame(id, status);
    res.status(200);
  } catch (error) {
    res.status(400);
  }
});

/**
 * @description Delete game
 */
Router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await GamesProvider.deleteGame(id);
    res.status(200);
  } catch (error) {
    res.status(400);
  }
});

export const GamesController = Router;

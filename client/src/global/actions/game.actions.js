import axios from 'axios';
import { ApiHandler } from '../../service/api';
import {
  ADD_GAMES,
  GET_GAMES,
  UPDATE_GAME,
  SEND_GAME_EMAIL,
  DELET_GAME
} from '../actionTypes';

export const getGames = () => async dispatch => {
  const games = await ApiHandler.getGames();

  dispatch({
    type: GET_GAMES,
    payload: games
  });
};

export const addGames = async id => {
  await ApiHandler.addGames(id);
  getGames();
};

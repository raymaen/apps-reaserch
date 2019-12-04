import { GET_GAMES } from '../actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return action.payload;
    default:
      return state;
  }
}

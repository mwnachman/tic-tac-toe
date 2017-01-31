import { combineReducers } from 'redux';
import GameReducer from './game';
import PlayerReducer from './player';


const allReducers = combineReducers({
  game: GameReducer,
  player: PlayerReducer
});


export default allReducers;
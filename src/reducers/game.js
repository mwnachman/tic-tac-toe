import { playerMove, computerMove } from '../helpers/gameLogic';

const originalGameState = [null, null, null, null, null, null, null, null, null];

const GameReducer = (state =  
  originalGameState
, action) => {
  if ( action.type === 'SELECT_SQUARE' ) {
    let player = action.payload.player;
    let square = action.payload.square;
    let board = action.payload.board;
    let newValueOfSquare = playerMove(player, square, board);
    let stateBeforeSquare = state.slice(0, square);
    let stateAfterSquare = state.slice(square + 1); 
    return stateBeforeSquare.concat(newValueOfSquare).concat(stateAfterSquare);
  } else if ( action.type === 'COMPUTER_MOVE') {
    let player = action.payload.player;
    let board = action.payload.board;
    let square = computerMove(player, board);
    let stateBeforeSquare = state.slice(0, square);
    let stateAfterSquare = state.slice(square + 1); 
    return stateBeforeSquare.concat(player).concat(stateAfterSquare);
  } else if ( action.type === 'NEW_GAME') {
    return originalGameState;
  } else {
    return state;
  }
};


export default GameReducer;

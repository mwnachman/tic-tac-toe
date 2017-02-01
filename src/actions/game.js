// import thunk from 'redux-thunk';
// import Promise from 'bluebird';

import { checkForWin } from '../helpers/gameLogic';
import { youWonAction } from './player';


export const startNewGameAction = () => {
  return {
    type: 'NEW_GAME'
  };
};


export const selectSquareAction = (square, player) => {
  return {
    type: 'SELECT_SQUARE',
    payload: {
      player: player,
      square: square
    }
  }; 
};

export const computerMoveAction = (player, board) => {
  console.log('in computer move action');
  return {
    type: 'COMPUTER_MOVE', 
    payload: {
      player: player,
      board: board
    }
  }
};

export const makeMoveAction = (square, player, board, turn) => {
  let boardCopy = board.slice();
  boardCopy[square] = player;
  let computerPlayer = player === "X" ? "O" : "X";
  if (turn && board[square] === null) {
    setTimeout(function() {
      if (checkForWin(player, square, boardCopy)) {
        youWonAction();
      } else { 
        return computerMoveAction(computerPlayer, board);
      }
    }, 1500);
    return selectSquareAction(square, player);
  }
};

export const changeTurn = () => {
  return {
    type: 'CHANGE_TURN'
  }
};
import { checkForWin } from '../helpers/gameLogic';

export const selectX = () => {
  return {
    type: 'SELECT_X',
    payload: "X"
  };
};

export const selectO = () => {
  return {
    type: 'SELECT_O',
    payload: "O"
  };
};

export const youWonAction = (player, square, board) => {
  // console.log('in you won action');
  let win = checkForWin(player, square, board);
  // console.log('win', win);
  return {
      type: 'WIN_GAME',
      payload: {
        player: player, 
        win: win
    }
  }
};

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
  let win = checkForWin(player, square, board);
  return {
      type: 'WIN_GAME',
      payload: {
        player: player, 
        win: win
    }
  }
};

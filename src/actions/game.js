export const startNewGameAction = () => {
  return {
    type: 'NEW_GAME'
  };
};

export const computerMoveAction = (player, move) => {
  // console.log('in computer move action');
  // console.log('move', move);
  return {
    type: 'COMPUTER_MOVE', 
    payload: {
      player : player,
      move: move
    }
  };
};

export const selectSquareAction = (square, player) => {
  // console.log('in select square action');
  return {
    type: 'SELECT_SQUARE',
    payload: {
      player: player,
      square: square
    }
  }; 
};


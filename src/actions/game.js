export const startNewGameAction = () => {
  return {
    type: 'NEW_GAME'
  };
};

export const computerMoveAction = (player, move) => {
  return {
    type: 'COMPUTER_MOVE', 
    payload: {
      player : player,
      move: move
    }
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


export const startNewGameAction = () => {
  return {
    type: 'NEW_GAME'
  };
};

export const selectSquareAction = (square, player, board, playersTurn) => {
  console.log('in select square');
  if (playersTurn) {
    return {
      type: 'SELECT_SQUARE',
      payload: {
        player: player,
        square: square,
        board: board
      }
    }
  } else {
    return {
      type: 'DO_NOTHING'
    };
  }
}

export const computerMoveAction = (player, board) => {
  return {
    type: 'COMPUTER_MOVE', 
    payload: {
      player: player,
      board: board
    }
  }
}

export const changeTurn = () => {
  return {
    type: 'CHANGE_TURN'
  }
}
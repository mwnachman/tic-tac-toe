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

export const youWonAction = () => {
  console.log('in you won action');
  return {
    type: 'WIN_GAME'
  };
};
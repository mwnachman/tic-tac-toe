export const playerMove = (player, square, board, turn) => {
  console.log('in player move');
  if (board[square] === null || board[square] === player) {
    return player;
  }


}

export const computerMove = (player, board) => {
  console.log('in computer move');
  // Logic of Game
  var square; 
  return square;
}

export const checkForWin = (player, board) => {
  console.log('in check for win');
}
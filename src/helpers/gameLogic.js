export const playerMove = (player, square, board, turn) => {
  console.log('in player move');

  if (board[square] === null || board[square] === player) {
    return player;
  }
};

export const computerMove = (player, board) => {
  console.log('in computer move');
  // Logic of Game

  // var square; 
  return 5;
};


const checkTopRow = (player, board) => {
  return (board[0] === player && board[1] === player && board[2] === player);
};

const checkMiddleRow = (player, board) => {
  return (board[3] === player && board[4] === player && board[5] === player);
};

const checkBottomRow = (player, board) => {
  return (board[6] === player && board[7] === player && board[8] === player);
};

const checkFirstColumn = (player, board) => {
  return (board[0] === player && board[3] === player && board[6] === player);
};

const checkSecondColumn = (player, board) => {
  return (board[1] === player && board[4] === player && board[7] === player);
};

const checkThirdColumn = (player, board) => {
  return (board[2] === player && board[5] === player && board[8] === player);
};

const checkLeftToRightDiagonal = (player, board) => {
  return (board[0] === player && board[4] === player && board[8] === player);
};

const checkRightToLeftDiagonal = (player, board) => {
  return (board[2] === player && board[4] === player && board[6] === player);
};

export const checkForWin = (player, square, board) => {
  console.log('in check for win');
  board[square] = player;
  if (square === 0) {
    console.log('in square 0');
    return (checkTopRow(player, board) 
            || checkLeftToRightDiagonal(player, board) 
            || checkFirstColumn(player, board));
  } else if (square === 1) {
    console.log('in square 1');
    return (checkTopRow(player, board) 
            || checkSecondColumn(player, board));
  } else if (square === 2) {
    console.log('in square 2');
    return (checkTopRow(player, board) 
            || checkThirdColumn(player, board)
            || checkRightToLeftDiagonal(player, board));
  } else if (square === 3) {
    console.log('in square 3');
    return (checkFirstColumn(player, board) 
            || checkMiddleRow(player, board));
  } else if (square === 4) {
    console.log('in square 4');
    return (checkLeftToRightDiagonal(player, board) 
            || checkRightToLeftDiagonal(player, board)
            || checkMiddleRow(player, board) 
            || checkSecondColumn(player, board));
  } else if (square === 5) {
    console.log('in square 5');
    return (checkThirdColumn(player, board) 
            || checkMiddleRow(player, board));
  } else if (square === 6) {
    console.log('in square 6');
    return (checkFirstColumn(player, board)
            || checkBottomRow(player, board)
            || checkRightToLeftDiagonal(player, board));
  } else if (square === 7) {
    console.log('in square 7');
    return (checkSecondColumn(player, board) 
            || checkBottomRow(player, board));
  } else if (square === 8) {
    console.log('in square 8');
    return (checkLeftToRightDiagonal(player, board)
            || checkThirdColumn(player, board)
            || checkBottomRow(player, board))
  }
};
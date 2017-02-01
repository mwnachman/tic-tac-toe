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
  board[square] = player;
  let allSquaresFull = true;
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      allSquaresFull = false;
    }
  }
  if (square === 0) {
    if (allSquaresFull) {
      if (checkTopRow(player, board) 
        || checkLeftToRightDiagonal(player, board) 
        || checkFirstColumn(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkTopRow(player, board) 
        || checkLeftToRightDiagonal(player, board) 
        || checkFirstColumn(player, board));
    }
  } else if (square === 1) {
    if (allSquaresFull) {
      if (checkTopRow(player, board) 
        || checkSecondColumn(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkTopRow(player, board) 
        || checkSecondColumn(player, board));
    }
  } else if (square === 2) {
    if (allSquaresFull) {
      if (checkTopRow(player, board) 
        || checkThirdColumn(player, board)
        || checkRightToLeftDiagonal(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkTopRow(player, board) 
        || checkThirdColumn(player, board)
        || checkRightToLeftDiagonal(player, board));
    }
  } else if (square === 3) {
    if (allSquaresFull) {
      if (checkFirstColumn(player, board) 
        || checkMiddleRow(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkFirstColumn(player, board) 
        || checkMiddleRow(player, board)); 
    }
  } else if (square === 4) {
    if (allSquaresFull) {
      if (checkLeftToRightDiagonal(player, board) 
        || checkRightToLeftDiagonal(player, board)
        || checkMiddleRow(player, board) 
        || checkSecondColumn(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkLeftToRightDiagonal(player, board) 
        || checkRightToLeftDiagonal(player, board)
        || checkMiddleRow(player, board) 
        || checkSecondColumn(player, board));
    }
  } else if (square === 5) {
    if (allSquaresFull) {
      if (checkThirdColumn(player, board) 
        || checkMiddleRow(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkThirdColumn(player, board) 
        || checkMiddleRow(player, board));
    }
  } else if (square === 6) {
    if (allSquaresFull) {
      if (checkFirstColumn(player, board)
        || checkBottomRow(player, board)
        || checkRightToLeftDiagonal(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkFirstColumn(player, board)
        || checkBottomRow(player, board)
        || checkRightToLeftDiagonal(player, board));
    }
  } else if (square === 7) {
    if (allSquaresFull) {
      if (checkSecondColumn(player, board) 
        || checkBottomRow(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkSecondColumn(player, board) 
        || checkBottomRow(player, board)); 
    }
  } else if (square === 8) {
    if (allSquaresFull) {
      if (checkLeftToRightDiagonal(player, board)
        || checkThirdColumn(player, board)
        || checkBottomRow(player, board)) {
        return true;
      } else {
        return 'draw';
      }
    } else {
      return (checkLeftToRightDiagonal(player, board)
        || checkThirdColumn(player, board)
        || checkBottomRow(player, board));
    }
  } else {
    return 'draw';
  }
};

export const twoInARow = function(player, board) {
  for (let i = 0; i < 7; i += 3) {
    // horizontal
    if (board[i] === player) {
      if (board[i + 1] === player) {
        if (board[i + 2] === null) {
          return i + 2;
        };
      } else if (board[i + 2] === player) {
        if (board[i + 1] === null) {
          return i + 1;
        }
      }
    } else if (board[i + 1] === player) {
      if (board[i + 2] === player) {
        if (board[i] === null) {
          return i;
        }
      } 
    }
  }
  for (let j = 0; j < 3; j++) {
    // vertical
    if (board[j] === player) {
      if (board[j + 3] === player) {
        if (board[j + 6] === null) {
          return j + 6;
        }
      } else if (board[j + 6] === player) {
        if (board[j + 3] === null) {
          return j + 3;
        }
      }
    } else if (board[j + 3] === player) {
      if (board[j + 6] === player) {
        if (board[j] === null) {
          return j;
        }
      }
    }
  }
    // diagonal
  if (board[0] === player && board[4] === player) {
    if (board[8] === null) {
      return 8;
    }
  } else if (board[4] === player && board[8] === player) {
    if (board[0] === null) {
      return 0;
    }
  } else if (board[0] === player && board[8] === player) {
    if (board[4] === null) {
      return 4;
    }
  } else if (board[2] === player && board[4] === player) {
    if (board[6] === null) {
      return 6;
    }
  } else if (board[4] === player && board[6] === player) {
    if (board[2] === null) {
      return 2;
    }
  } else if (board[2] === player && board[6] === player) {
    if (board[4] === null) {
      return 4;
    }
  } else if (board[0] === player && board[4] === player) {
    if (board[8] === null) {
      return 8;
    }
  } else {
    return -1;
  }
};

export const findMove = (player, board) => {
  let humanPlayer = player === "X" ? "O" : "X";
  if (twoInARow(player, board) > 0 ||  twoInARow(humanPlayer, board) > 0) {
    return twoInARow(player, board) > -1 ? twoInARow(player, board) : twoInARow(humanPlayer, board);
  } else if (board[4] === null) {
    return 4;
  } else if (board[0] === humanPlayer && board[8] === null) {
    return 8;
  } else if (board[8] === humanPlayer && board[0] === null) {
    return 0;
  } else if (board[2] === humanPlayer && board[6] === null) {
    return 6;
  } else if (board[6] === humanPlayer && board[2] === null) {
    return 2;
  } else if (board[0] === null) {
    return 0;
  } else if (board[2] === null) {
    return 2;
  } else if (board[6] === null) {
    return 6;
  } else if (board[8] === null) {
    return 8;
  } else if (board[1] === null) {
    return 1;
  } else if (board[3] === null) {
    return 3;
  } else if (board[5] === null) {
    return 5;
  } else if (board[7] === null) {
    return 7;
  }
};

















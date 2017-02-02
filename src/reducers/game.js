const originalGameState = [null, null, null, null, null, null, null, null, null];

const GameReducer = (state =  
  originalGameState
, action) => {
  if ( action.type === 'SELECT_SQUARE' ) {
    let player = action.payload.player;
    let square = action.payload.square;
    let stateBeforeSquare = state.slice(0, square);
    console.log('statebeforesquare select', stateBeforeSquare);
    let stateAfterSquare = state.slice(square + 1); 
    console.log('stateAfterSquare select', stateAfterSquare);
    return stateBeforeSquare.concat(player).concat(stateAfterSquare);
  } else if ( action.type === 'COMPUTER_MOVE' ) {
    var boardFull = true;
    for (let i = 0; i < 9; i++) {
      if (state[i] === null) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      return state;
    } else {
      let player = action.payload.player;
      let square = action.payload.move;
      let stateBeforeSquare = state.slice(0, square);
      console.log('statebeforesquare comp', stateBeforeSquare);
      let stateAfterSquare = state.slice(square + 1); 
      console.log('stateAfterSquare comp', stateAfterSquare);
      return stateBeforeSquare.concat(player).concat(stateAfterSquare);
    }
  } else if ( action.type === 'NEW_GAME') {
    return originalGameState;
  } else {
    return state;
  }
};


export default GameReducer;

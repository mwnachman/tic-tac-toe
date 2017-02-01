const originalGameState = [null, null, null, null, null, null, null, null, null];

const GameReducer = (state =  
  originalGameState
, action) => {
   // console.log("****",action.type);
  if ( action.type === 'SELECT_SQUARE' ) {
    // console.log('in SELECT_SQUARE');
    let player = action.payload.player;
    let square = action.payload.square;
    let stateBeforeSquare = state.slice(0, square);
    let stateAfterSquare = state.slice(square + 1); 
    return stateBeforeSquare.concat(player).concat(stateAfterSquare);
  } else if ( action.type === 'COMPUTER_MOVE' ) {
    // console.log('in COMPUTER_MOVE');
    let player = action.payload.player;
    let square = action.payload.move;
    // console.log('square', square);
    let stateBeforeSquare = state.slice(0, square);
    let stateAfterSquare = state.slice(square + 1); 
    return stateBeforeSquare.concat(player).concat(stateAfterSquare);
  } else if ( action.type === 'NEW_GAME') {
    return originalGameState;
  } else {
    return state;
  }
};


export default GameReducer;

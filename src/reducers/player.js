const PlayerReducer = (state = {
  name: 'Player',
  xOrY: null,
  optionVisible: true,
  playersTurn: false,
  playerWon: null,
  playerScore: 0,
  computerScore: 0
}
, action) => {
  if ( action.type === 'SELECT_X' ) {
    return Object.assign({}, state, {
      xOrY: "X",
      optionVisible: false,
      playersTurn: true
    })
  } else if ( action.type === 'SELECT_O' ) {
    return Object.assign({}, state, {
      xOrY: "O",
      optionVisible: false
    })
  } else if ( action.type === 'SELECT_SQUARE' ) {
    return Object.assign({}, state, {
      playersTurn: false
    })
  } else if ( action.type === 'WIN_GAME' ) {
    return Object.assign({}, state, {
      playerWon: true
    })
  } else if ( action.type === 'NEW_GAME' ) {
    return Object.assign({}, state, {
      xOrY: null,
      optionVisible: true,
      playersTurn: false,
      playerWon: null
    })
  } else {
    return state;
  }
}; 


export default PlayerReducer;

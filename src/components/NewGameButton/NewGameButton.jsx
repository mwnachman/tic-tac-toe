import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startNewGameAction } from '../../actions/game';
import './NewGameButton.css';

const mapStateToProps = (state) => {
  return {
    player: state.player, 
    game: state.game
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ startNewGame: startNewGameAction }, dispatch);
};
 

class NewGameButton extends Component {

  render () {
    return (
      <div className="new-game-div">
        <button className="new-game-button"
        onClick={this.props.startNewGame}>New Game</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(NewGameButton);

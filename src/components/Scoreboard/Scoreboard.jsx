import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Scoreboard.css';

const mapStateToProps = (state) => {
  return {
    player: state.player
  };
};

class Scoreboard extends Component {

  render () {
    return (
      <div className="score-div">
        <span className="score">Player: {this.props.player.playerScore}</span>
        <span className="score">Computer: {this.props.player.computerScore}</span>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Scoreboard);

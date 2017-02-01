import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { computerMoveAction } from '../../actions/game';
import { selectX, selectO } from '../../actions/player';
import './ChooseRole.css';

const mapStateToProps = (state) => {
  return {
    player: state.player
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectX: selectX, 
                              selectO: selectO, 
                              computerMove: computerMoveAction,
                             }, dispatch);
};
 

class ChooseRole extends Component {

  computerStartsGame() {
    this.props.selectO();
    this.props.computerMove("X", 4);
  }

  render () {
    return (
      <div className="choice">
        {this.props.player.optionVisible && 
          <div>
            <p className="choice-text">Would you like to be "X" or "O"?</p>
            <button className="choice-button" 
            onClick={this.props.selectX}>X</button>
            <button className="choice-button"
            onClick={this.computerStartsGame.bind(this)}>O</button>
          </div>
        }
        {!this.props.player.optionVisible && 
          <div className="chosen">
            <p>You are playing as "{this.props.player.xOrY}".</p>
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(ChooseRole);

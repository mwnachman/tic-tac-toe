import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSquareAction } from '../../actions/game';


import './Board.css';

const xImage = require('../../assets/X.png');
const oImage = require('../../assets/O.png');
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const mapStateToProps = (state) => {
  return {
    player: state.player,
    game: state.game
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectSquare: selectSquareAction
                             }, dispatch);
};
 

class Board extends Component {

  render () {
    return (
      <div className="board">
        {numbers.map(number =>
          (<span className={"square-" + number} key={number}
            onClick={() =>
              this.props.selectSquare(number, this.props.player.xOrY, this.props.game, this.props.player.playersTurn) 
            }>
            {this.props.game[number] === "X" &&
            <img src={xImage} />
            }
            {this.props.game[number] === "O" &&
            <img src={oImage} />
            }
           </span>)
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Board);


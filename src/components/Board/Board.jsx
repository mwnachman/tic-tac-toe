import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeMoveAction } from '../../actions/game';
// import { youWonAction } from '../../actions/player';
// import { checkForWin } from '../../helpers/gameLogic';
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
  return bindActionCreators({ makeMove: makeMoveAction,
                              // checkWin: checkForWin,
                              // youWonAction: youWonAction,
                              // computerMove: computerMoveAction
                             }, dispatch);
};
 

class Board extends Component {

  // makeMove(square, player, board, playersTurn) {
  //   if (playersTurn && board[square] === null) {  
  //     this.props.selectSquare(square, player, board);
  //   }
  // }

  render () {
    return (
      <div className="board">
        {numbers.map(number =>
          (<span className={"square-" + number} key={number}
            onClick={() =>
              this.props.makeMove(number, this.props.player.xOrY, 
                this.props.game, this.props.player.playersTurn)
            }>
            {this.props.game[number] === "X" &&
            <img src={xImage} />
            }
            {this.props.game[number] === "O" &&
            <img src={oImage} />
            }
           </span>)
        )}
        {this.props.player.playerWon === true &&
          <div className='win-or-lose'>YOU WIN!</div>  
        }
        {this.props.player.playerWon === false &&
          <div className='win-or-lose'>YOU LOST!</div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Board);


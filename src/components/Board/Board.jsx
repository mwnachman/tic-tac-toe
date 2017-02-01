import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { computerMoveAction, selectSquareAction } from '../../actions/game';
import { youWonAction } from '../../actions/player';
import { checkForWin, findMove } from '../../helpers/gameLogic';
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
  return bindActionCreators({ 
    checkWin: checkForWin,
                              youWonAction: youWonAction,
                              computerMove: computerMoveAction,
                              selectSquare: selectSquareAction
                             }, dispatch);
};
 

class Board extends Component {

  checkWin(player, square, board) {
    this.props.youWonAction(player, square, board);
  }

  computerMove(player, move) {
    this.props.computerMove(player, move);
    let boardCopy = this.props.game.slice();
    boardCopy[move] = player;
    this.props.youWonAction(player, move, boardCopy);
  }

  makeMove(square) {
    let boardCopy = this.props.game.slice();
    boardCopy[square] = this.props.player.xOrY;
    let computerPlayer = this.props.player.xOrY === "X" ? "O" : "X";
    if (this.props.player.playersTurn === true && this.props.game[square] === null) {
      this.props.selectSquare(square, this.props.player.xOrY);
      this.checkWin(this.props.player.xOrY, square, boardCopy);
      setTimeout((function() {this.computerMove(computerPlayer, findMove(computerPlayer, boardCopy))}).bind(this), 1000);
    }
  };

  render () {
    return (
      <div className="board">
        {numbers.map(number =>
          (<span className={"square-" + number} key={number}
            onClick={() =>
              this.makeMove(number)
            }>
            {this.props.game[number] === "X" &&
            <img alt="X" src={xImage} />
            }
            {this.props.game[number] === "O" &&
            <img alt="O" src={oImage} />
            }
           </span>)
        )}
        {this.props.player.playerWon === true &&
          <div className='win-or-lose'><div className='win-text'>YOU WIN!</div></div>  
        }
        {this.props.player.playerWon === false &&
          <div className='win-or-lose'><div className='win-text'>YOU LOST!</div></div>
        }
        {this.props.player.playerWon === "draw" &&
          <div className='win-or-lose'><div className='win-text'>DRAW</div></div>  
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Board);


import React, { Component } from 'react';
import ChooseRole from '../ChooseRole';
import Scoreboard from '../Scoreboard';
import Board from '../Board';
import NewGameButton from '../NewGameButton';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>TIC-TAC-TOE</h1>
        </div>
        <ChooseRole />
        <Scoreboard />
        <Board />
        <NewGameButton />
      </div>
    );
  }
}

export default App;

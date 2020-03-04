import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';


// import styles from '../stylesheet/board.css';

const mapStateToProps = (state) => ({
  gameBoard: state.game.gameBoard,
  sessionID: state.game.sessionID,
  socket: state.socket.socket,
  currTeamTurn: state.game.currTeamTurn,
  currUser: state.game.currUser,
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
    this.handleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick(socket, sessionID, affiliation, boardLocation) {
    console.log('handling tile click pls show up@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    const { currUser, currTeamTurn } = this.props;
    const { team } = currUser;
    console.log(team, currTeamTurn);
    console.log('are we in here');
    if (currTeamTurn === team) {
      socket.emit('tile clicked', { team, boardLocation, sessionID });
    }
  }

  render() {
    const {
      gameBoard, socket, sessionID,
    } = this.props;
    // console.log('this is gameboard: ', gameBoard);
    return (
      <>
        <h2>This is the board</h2>
        <section className="game-board">
          {gameBoard && (
            <>
              <section className="game-row" id="row-1">
                {gameBoard.slice(0, 5).map((el, idx) => <Tile key={`word-tile-${idx + (5 * 0)}`} selected={el.selected} boardLocation={idx + (5 * 0)} sessionID={sessionID} socket={socket} wordId={el.id} word={el.word} affiliation={el.affiliation} handleTileClick={this.handleTileClick} />)}
              </section>
              <section className="game-row" id="row-2">
                {gameBoard.slice(5, 10).map((el, idx) => <Tile key={`word-tile-${idx + (5 * 1)}`} selected={el.selected} boardLocation={idx + (5 * 1)} sessionID={sessionID} socket={socket} wordId={el.id} word={el.word} affiliation={el.affiliation} handleTileClick={this.handleTileClick} />)}
              </section>
              <section className="game-row" id="row-3">
                {gameBoard.slice(10, 15).map((el, idx) => <Tile key={`word-tile-${idx + (5 * 2)}`} selected={el.selected} boardLocation={idx + (5 * 2)} sessionID={sessionID} socket={socket} wordId={el.id} word={el.word} affiliation={el.affiliation} handleTileClick={this.handleTileClick} />)}
              </section>
              <section className="game-row" id="row-4">
                {gameBoard.slice(15, 20).map((el, idx) => <Tile key={`word-tile-${idx + (5 * 3)}`} selected={el.selected} boardLocation={idx + (5 * 3)} sessionID={sessionID} socket={socket} wordId={el.id} word={el.word} affiliation={el.affiliation} handleTileClick={this.handleTileClick} />)}
              </section>
              <section className="game-row" id="row-5">
                {gameBoard.slice(20, 25).map((el, idx) => <Tile key={`word-tile-${idx + (5 * 4)}`} selected={el.selected} boardLocation={idx + (5 * 4)} sessionID={sessionID} socket={socket} wordId={el.id} word={el.word} affiliation={el.affiliation} handleTileClick={this.handleTileClick} />)}
              </section>
            </>
          )}
        </section>
      </>
    );
  }
}

export default connect(mapStateToProps)(Board);

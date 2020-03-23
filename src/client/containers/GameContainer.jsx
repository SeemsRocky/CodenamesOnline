import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import ChatboxContainer from './ChatboxContainer';
import ClueDisplay from '../components/ClueDisplay';

const mapStateToProps = (state) => ({
  sessionID: state.game.sessionID,
  // newClue: state.game.newClue,
  currentClue: state.game.currentClue,
  guessesLeft: state.game.guessesLeft,
});

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    // in the middle of setting up Clue Display. passing down props
    const { sessionID, guessesLeft, currentClue } = this.props;
    return (
      <section className="game-container">
        <h2>
          {`Welcome to iSpy! Session: ${sessionID || 'TBD'}`}
        </h2>
        <ClueDisplay guesses={guessesLeft} clue={currentClue} />
        <section id="GameChatContainer">
          <Board />
          <ChatboxContainer />
        </section>
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(GameContainer);

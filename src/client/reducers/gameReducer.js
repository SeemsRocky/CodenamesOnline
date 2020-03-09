import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

const initialTeamObj = {
  members: [],
  wordsLeft: 0,
};

const initialState = {
  sessionID: null,
  currTeamTurn: 'blue',
  redTeam: initialTeamObj,
  blueTeam: initialTeamObj,
  currUser: {
    username: '',
    isSpyMaster: false,
    team: 'blue',
  },
  gameBoard: mockGameBoard,
  messages: [],
  currentClue: '',
  guessesLeft: 0,
  // newGuesses: 0,
  // newClue: '',
};

const gameReducer = (state = initialState, action) => {
  // console.log(mockGameBoard);
  // console.log('inside reducer');
  console.log('action is ', action);
  switch (action.type) {
    case types.NEW_SESSION: {
      const { sessionID, username } = action.payload;
      return {
        ...state,
        sessionID,
        currUser: { username, isSpyMaster: true, team: 'blue' },
        blueTeam: {
          ...state.blueTeam,
          members: [...state.blueTeam.members, { username, isSpyMaster: true, ready: false }],
        },
      };
    }
    case types.JOIN_SESSION: {
      // return { sessionID: action.payload.sessionID, username: action.payload.username };
      // return state;
      const { sessionID, username } = action.payload;
      const redCount = state.redTeam.members.length;
      const blueCount = state.blueTeam.members.length;
      const team = blueCount > redCount ? 'red' : 'blue';
      const isSpyMaster = redCount === 0;
      // console.log('state before adding joined user', state);
      // console.log('payload in JOIN_SESSION', action.payload);
      // console.log('isSpymaster: ', isSpyMaster);
      // console.log('my team is ', team);
      return {
        ...state,
        sessionID,
        currUser: { username, isSpyMaster, team },
      };
    }

    case types.UPDATE_STORES:
      console.log('************', action.payload.redTeam.length);
      console.log(state);
      return {
        ...state,
        messages: [...action.payload.messages],
        gameBoard: action.payload.gameBoard.length ? [...action.payload.gameBoard] : [...state.gameBoard],
        redTeam: { members: [...action.payload.redTeam], wordsLeft: action.payload.gameBoard.filter((cv) => cv.affiliation === 'red').length },
        blueTeam: { members: [...action.payload.blueTeam], wordsLeft: action.payload.gameBoard.filter((cv) => cv.affiliation === 'blue').length },
        currUser: {
          ...state.currUser,
          isSpyMaster: action.payload.redTeam.length === 0,
          // team: action.payload.redTeam.length === action.payload.blueTeam.length ? 'red' : 'blue',
        },

      };
    case types.NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    case types.POPULATE_BOARD:
      return {
        ...state,
        gameBoard: action.payload,
      };
    case types.SET_CURRENT_CLUE:
      console.log('set current clue, game reducer');
      return {
        ...state,
        currentClue: action.payload.clue,
        guessesLeft: action.payload.guesses,
      };
    case types.SELECT_TILE: {
      const newGameBoard = JSON.parse(JSON.stringify(state.gameBoard));
      newGameBoard[action.payload.boardLocation].selected = true;
      return {
        ...state,
        guessesLeft: state.guessesLeft - 1 >= 0 ? state.guessesLeft - 1 : 0,
        gameBoard: newGameBoard,
      };
    }
    case types.UPDATE_TEAMS:
      const { user, teamKey } = action.payload;
      return {
        ...state,
        [teamKey]: { ...state[teamKey], members: [...state[teamKey].members.map((cv) => ({ ...cv })), user] },
      };
    default:
      // console.log('default reducer run');
      return state;
  }
};

export default gameReducer;

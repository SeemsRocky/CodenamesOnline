import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';


const initialState = {
  sessionID: null,
  ready: false,
  currTeamTurn: 'blue',
  blueTeam: [],
  redTeam: [],
  currUser: {
    userID: '',
    username: '',
    isSpyMaster: false,
    team: 'blue',
  },
  gameBoard: mockGameBoard,
  messages: [],
  currentClue: '',
  guessesLeft: -1,
};

const gameReducer = (state = initialState, action) => {
  console.log('action is ', action);
  switch (action.type) {
    case types.NEW_SESSION: {
      const { sessionID, username } = action.payload;
      return {
        ...state,
        sessionID,
        currUser: {
          username, isSpyMaster: true, team: 'blue', userID: action.payload.userID,
        },
        blueTeam: [...state.blueTeam, { username, isSpyMaster: true, ready: false }],
      };
    }
    case types.JOIN_SESSION: {
      const {
        sessionID, username, data, userID,
      } = action.payload;
      console.log('pre updated state \n', data, action.payload);
      const redCount = data.redTeam.length;
      const blueCount = data.blueTeam.length;
      const team = blueCount > redCount ? 'red' : 'blue';
      const teamKey = `${team}Team`;
      const isSpyMaster = redCount === 0;
      console.log(`${username} is on ${teamKey}`);
      return {
        ...state,
        sessionID,
        currUser: {
          userID, username, isSpyMaster, team,
        },
        [teamKey]: [...state[teamKey].map((cv) => ({ ...cv })), { username, isSpyMaster, ready: false }],
      };
    }

    case types.UPDATE_STORES:
      console.log('************', action.payload.redTeam.length);
      console.log('payload here \n', action.payload);
      return {
        ...state,
        messages: [...action.payload.messages],
        gameBoard: action.payload.gameBoard.length ? [...action.payload.gameBoard] : [...state.gameBoard],
        blueTeam: [...action.payload.blueTeam],
        redTeam: [...action.payload.redTeam],
        currUser: {
          ...state.currUser,
          isSpyMaster: action.payload.redTeam.length === 0,
        },
        numBlueWords: action.payload.gameBoard.filter((cv) => cv.affiliation === 'blue').length,
        numRedWords: action.payload.gameBoard.filter((cv) => cv.affiliation === 'red').length,
      };
    case types.NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    case types.POPULATE_BOARD:
      return {
        ...state,
        gameBoard: action.payload,
      };
    case types.SELECT_TILE: {
      const newGameBoard = JSON.parse(JSON.stringify(state.gameBoard));
      newGameBoard[action.payload.boardLocation].selected = true;
      return {
        ...state,
        guessesLeft: state.guessesLeft - 1,
        gameBoard: newGameBoard,
      };
    }
    case types.JOIN_LOBBY:
      return {
        ...state,
        [action.payload.teamKey]: [...state[action.payload.teamKey].map((cv) => ({ ...cv })), action.payload.user],
      };
    case types.CHANGE_TEAMS:
      return {
        ...state,
        currUser: {
          ...state.currUser,
          team: action.payload.currTeam,
        },
        [action.payload.teamKey]: [...state[action.payload.teamKey].map((cv) => ({ ...cv })), action.payload.user],
        [action.payload.prevTeam]: [...state[action.payload.prevTeam].filter(({ username }) => username !== action.payload.user.username)],

      };
    case types.CHANGE_SPYMASTER:
      return {
        ...state,
        blueTeam: [...state.blueTeam.filter(({ username }) => username !== action.payload.username[0]), { username: action.payload.username[0], isSpyMaster: true, team: 'blue' }],
        redTeam: [...state.redTeam.filter(({ username }) => username !== action.payload.username[1]), { username: action.payload.username[1], isSpyMaster: true, team: 'red' }],
      };
    case types.UPDATE_CLUE:
      console.log('update clue and number of guesses in clue reducer');
      return {
        ...state,
        currentClue: action.payload.currentClue,
        guessesLeft: action.payload.guessesLeft,
      };
    case types.UPDATE_GUESSES:
      console.log('update guesses, clue reducer');
      return {
        ...state,
        guessesLeft: action.payload.guessesLeft,
      };
    case types.CHANGE_TURN:
      return {
        ...state,
        currTeamTurn: action.payload.nextTeamTurn,
        guessesLeft: -1,
        currentClue: '',
      };
    case types.START_GAME:
      return {
        ...state,
        ready: true,
      };
    default:
      console.log('default reducer run');
      return state;
  }
};

export default gameReducer;

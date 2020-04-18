import * as types from '../constants/ActionTypes';


export const populateBoard = (sessionID) => (dispatch) => fetch('/api/game/start', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ session_id: sessionID }),
})
  .then((res) => res.json())
  .then((data) => {
    // console.log('this is my data! ', data);
    dispatch({
      type: types.POPULATE_BOARD,
      payload: data,
    });
  })
  .catch((err) => {
    console.log('error in populateBoard fetch ', err);
  });

export const populateBoardSocket = (newBoard) => ({
  type: types.POPULATE_BOARD,
  payload: newBoard,
});

// SESSIONS
export const newSession = (username) => (dispatch) => fetch('/api/session/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username }),
})
  .then((res) => res.json())
  .then((data) => {
    // console.log('got data back: ', data);
    dispatch({
      type: types.NEW_SESSION,
      payload: { sessionID: data.roomID, username },
    });
  })
  .catch((e) => console.log('error caught: ', e));

export const joinSession = (roomID, username) => (dispatch) => fetch(`/api/session/update-stores?room=${roomID}`)
  .then((res) => res.json())
  .then((data) => {
    console.log('why are we in here twice');

    dispatch({
      type: types.JOIN_SESSION,
      payload: { sessionID: roomID, username, data },
    });
  });

// ////////// UPDATING STATE
export const updateStores = (room) => (dispatch) => fetch(`/api/session/update-stores?room=${room}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log('update stores data: ', json);
    // const {
    //   messages, blueTeam, redTeam, gameBoard,
    // } = json;

    dispatch({
      type: types.UPDATE_STORES,
      payload: data,
    });
  });

export const updateTeams = (payload) => ({
  type: types.UPDATE_TEAMS,
  payload,
});
// /////////////// GAME STATE
export const startGame = () => ({
  // NEED A THUNK
  type: types.START_GAME,
  payload: 'filler',
});

export const endGame = () => ({
  // NEED A THUNK
  type: types.END_GAME,
  payload: 'filler',
});

export const selectTile = (boardLocation) => ({
  // NEED A THUNK
  type: types.SELECT_TILE,
  payload: {
    boardLocation,
  },
});

export const changeTurn = (nextTeamTurn) => ({
  // NEED A THUNK
  type: types.CHANGE_TURN,
  payload: {
    nextTeamTurn,
  },
});

// ////////////////////////////// CLUES
export const updateClue = (currentClue, guessesLeft) => ({
  // NEED A THUNK
  type: types.UPDATE_CLUE,
  payload: {
    currentClue,
    guessesLeft,
  },
});

export const updateGuesses = (guessesLeft) => ({
  type: types.UPDATE_GUESSES,
  payload: {
    guessesLeft,
  },
});

export const newMessage = (payload) => ({
  // NEED A THUNK
  type: types.NEW_MESSAGE,
  payload,
});

export const loadMessages = () => ({
  // NEED A THUNK
  type: types.LOAD_MESSAGES,
  payload: 'filler',
});

// MIGHT NOT NEED
export const userLogin = () => ({
  // NEED A THUNK
  type: types.USER_LOGIN,
  payload: 'filler',
});

// MIGHT NOT NEED
export const createUser = () => ({
  // NEED A THUNK
  type: types.CREATE_USER,
  payload: 'filler',
});

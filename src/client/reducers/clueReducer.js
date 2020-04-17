import * as types from '../constants/ActionTypes';

const initialState = {
  currentClue: '',
  guessesLeft: 0,
};

const clueReducer = (state = initialState, action) => {
  console.log('action in clueReducer: ', action);
  switch (action.type) {
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
    default:
      // console.log('default reducer run, clue reducer');
      return state;
  }
};

export default clueReducer;

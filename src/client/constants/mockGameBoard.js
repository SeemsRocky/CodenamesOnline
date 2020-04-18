import {
  BLUE_TEAM, RED_TEAM, assassin, NEUTRAL,
} from './affiliations';

class Word {
  constructor(word, id, affiliation = NEUTRAL, cardPicked = false) {
    this.word = word;
    this.id = id;
    this.cardPicked = cardPicked;
    this.affiliation = affiliation;
  }
}

const mockGameBoard = [
  new Word('time', 1, assassin),
  new Word('chocolate', 2, BLUE_TEAM),
  new Word('year', 3, BLUE_TEAM),
  new Word('way', 4, BLUE_TEAM),
  new Word('day', 5, BLUE_TEAM),
  new Word('thing', 6, BLUE_TEAM),
  new Word('man', 7, BLUE_TEAM),
  new Word('world', 8, BLUE_TEAM),
  new Word('life', 9, BLUE_TEAM),
  new Word('hand', 10, BLUE_TEAM),
  new Word('part', 11, RED_TEAM),
  new Word('child', 12, RED_TEAM),
  new Word('eye', 13, RED_TEAM),
  new Word('woman', 14, RED_TEAM),
  new Word('place', 15, RED_TEAM),
  new Word('work', 16, RED_TEAM),
  new Word('week', 17, RED_TEAM),
  new Word('case', 18, RED_TEAM),
  new Word('point', 19, NEUTRAL),
  new Word('government', 20, NEUTRAL),
  new Word('company', 21, NEUTRAL),
  new Word('number', 22, NEUTRAL),
  new Word('group', 23, NEUTRAL),
  new Word('problem', 24, NEUTRAL),
  new Word('fact', 25, NEUTRAL),
];

export default mockGameBoard;

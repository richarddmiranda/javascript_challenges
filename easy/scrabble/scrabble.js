// Problem
  // given word (string), compute Scrabble score (number)
  // Sum the values of all the tiles used in each word.
  // Empty word, whitespace, nil scores zero

// Data structure
  // object to hold scores


// Algo
  // constructor function takes in word to uppercase
  // isZeroScore check
    // if word is whitespace, empty or nil, return 0
  // score
    // dec scrabbleScore 0
    // iterate over object
    // if value includes letter to, increment score
    // return score


class Scrabble {

  static LETTERS = {
    1: 'AEIOULNRST',
    2: 'DG',
    3: 'BCMP',
    4: 'FHVWY',
    5: 'K',
    8: 'JX',
    10: 'QZ',

  }

  static score(word) {
    let instance = new Scrabble(word);
    return instance.score()
  }
  constructor(word) {
    this.word = word;
  }

  

  isZeroScore() {
    return (this.word === '' ||
      this.word === ' ' ||
      this.word === null ||
      this.word === undefined)
  }

  score() {
    let scrabbleScore = 0;
    if (this.isZeroScore()) return 0;

    for (let i = 0; i < this.word.length; i++) {
      for (let key in Scrabble.LETTERS) {

        if (Scrabble.LETTERS[key].includes(this.word[i].toUpperCase())) {
          scrabbleScore += Number(key);
        }
      }
    }

    return Number(scrabbleScore)
  }
}

let scrab = new Scrabble(null);

console.log(scrab.score())

module.exports = Scrabble
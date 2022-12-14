//Probl
  // take word (string) and compare with array of strings
  // return array containing all anagram matches
  // no matches returns empty array
  // idetical word is not an anagram
  // case insensitive

//Data

// array to capture relevant anagrams

//Algo

// constructor class with string input set to lowercase
// helper function - determine if words are same
// match function, 
  // dec filteredArray
  // iterate over input array
  // check if same word
  // sort word alphabetically and tolowercaswe
  // if it equals inputWord, return it.
  // return array

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  sameWord(comparisonWord) {
    return (comparisonWord.toLowerCase() === this.word)
  }

  match(potentialAnagrams) {
    return potentialAnagrams.filter(word => {
      if (!this.sameWord(word)) {

        let sortedWord = word.toLowerCase().split('').sort().join('');

        if (sortedWord === this.word.split('').sort().join('')) return word;
      }
    });
  
  }
}


module.exports = Anagram

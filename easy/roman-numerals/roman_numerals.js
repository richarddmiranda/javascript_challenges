// Problem
//  take number, convert it into Roman numeral equivalent as string
// Roman numerals are letters.
// no need to convert numbers larger than 3k
// Roman numerals written by expressing each difigt separatey starting with left most digit,
// ...skipping any digit with value of 0.


// DataStruc
  // object to hold translations of main numerals
  // go from highest to lowest


// Algo
  // instantiate object with numerals
  // iterate over object
  // declare romanNumerals
  // while the number is greater than or equal to the current value
  // roman Numeral + that particular key
  // number - that value.
  // return number

class RomanNumeral {

  static NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
  }

  constructor(number) {
    this.number = number
  }


  toRoman() {
    let roman = '';

    for (let key in RomanNumeral.NUMERALS) {
      while (this.number >= RomanNumeral.NUMERALS[key]) {
        roman += key;
        this.number -= RomanNumeral.NUMERALS[key]
      }
    }
    return roman;
  }
}

let number = new RomanNumeral(2000);
console.log(number.toRoman());

module.exports = RomanNumeral

  
// Problem
// given number and set of numbers, find sum of all multples of numbers in set less than main number.
// if set of numbers not given, default set 3 and 5

// DataStruc
// array to hold multples

// Algo
// constructor, if set given this.divisors - otherwise 3 and 5
// instance to
  // dec multiplesArray
  // loop over set
  // loop over number, counting down
  // shoot multiples into array
  // reduce and return
// static to

class SumOfMultiples {
  constructor(...set) {
    set.length === 0 ? this.divisors = [3, 5] : this.divisors = [...set];
  }

  to(number) {
    let multiplesArray = [];
    
    for (let counter = 0; counter < number; counter ++ ) {

      if (this.divisors.some(divisor => counter % divisor === 0)) {
        multiplesArray.push(counter)
      }
    }
    return multiplesArray.length === 0 ? 0 : multiplesArray.reduce((a, b) => a + b)
   
  }

  static to(number) {
    let instance = new SumOfMultiples();
    console.log(this.divisors)
    return instance.to(number);

  }


}

console.log(SumOfMultiples.to(4));

module.exports = SumOfMultiples
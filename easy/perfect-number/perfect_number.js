// Problem
  // 

// DataStruc
  // array to hold divisors

// Algo
  // classify
    // if statement
  // getAliquotSum
    // dec divisorArray
    // dec divisors
    // loop over number
    // if count remainder is 0, push to divisor Array
    // reduce and return divisor Array

class PerfectNumber {

  static classify(number) {
    if (!this.validNumber) throw new Error('this is an error you see')
    let aliquotSum = this.getAliquotSum(number);

    if (aliquotSum > number) {
      return 'abundant'
    } else if (aliquotSum === number) {
      return 'perfect'
    } else {
      return 'deficient'
    }
  }

  static validNumber(number) {
    return number >= 0;
  }

  static getAliquotSum(number) {
    let divisorArray = [];
    for (let counter = number - 1; counter > 0; counter -- ) {
      if (number % counter === 0) divisorArray.push(counter);
    }
    return divisorArray.reduce((a, b) => a + b);
  }
}

module.exports = PerfectNumber
class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3]
    if (!this.validTriangle()) {
      throw new Error('not a real triangle');
    }
    
  }
  
  validTriangle() {
    return (!this.sides.some(side => side === 0) &&
            this.sides.every(side => side > 0) &&
            this.validLengths(this.sides));
  }

  validLengths() {
    return (this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[0] + this.sides[2] > this.sides[1] &&
      this.sides[1] + this.sides[2] > this.sides[0]);
  }

  kind() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]) {
      return 'equilateral';
    } else if (this.sides[0] !== this.sides[1] && this.sides[0] !== this.sides[2] && this.sides[1] !== this.sides[2]) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }

}



module.exports = Triangle;

// Problem
// determine type of this.sides


// Algorithm
// validateTriangle
  // if all sides not 0 and sum of lengths greater than third side, return true
// kind
  // if all equal, equi
  // if any two sides equal, isos
  // scalene



class Octal {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {

    if (this.invalidNumbers()) return 0;
    let octalArray = [];
    let powerOf = this.number.length - 1
    

    for (let index = 0; index < this.number.length; index++) {
  
      let octalNumber = Number(this.number[index]) * (Math.pow(8, powerOf))
      octalArray.push(octalNumber);
      powerOf -= 1;
    }

    return octalArray.reduce((a, b) => a + b);

  }

  invalidNumbers() {
    let regex = /([89])/g
    let integer = Number(this.number);
    return (this.number.includes(regex) ||
      integer === 0 ||
      Number.isNaN(integer))
  }
}

let octal = new Octal('1240');
console.log(octal.toDecimal())

module.exports = Octal
/*
P: input a number
return string either 'perfect' 'deficient' or 'abundant'
throw error if number is <1

D: input number, calculte aliquot sum, return string

*/

perfectNumber = {
  classify(inpNum) {
    if (inpNum < 1) throw new Error()
    let divisors = this.calculateDivisors(inpNum);
    let total = divisors.reduce((prev, current) => {
      return prev + current;
    }, 0)
    if (total === inpNum) return 'perfect';
    if (total < inpNum) return 'deficient';
    if (total > inpNum) return 'abundant';
  },
  calculateDivisors(inpNum) {
    let returnArray = [1]
    for (let value = 2; value <= Math.ceil(Math.sqrt(inpNum)); value += 1) {
      if ((inpNum/value) % 1 === 0) returnArray.push(value, inpNum/value);
    }
    return returnArray;
  }
}

module.exports = perfectNumber;
/*
P:
given octal input string produce decimal output

octal new keyword
if number is invalid return 0

*/

function Octal(inpString) {
  this.input = inpString;
}

Octal.prototype.toDecimal = function () {
  if (this.isValid()) {
    let returnValue = 0;
    for (let index = 0; index < this.input.length; index += 1) {
      let multiplier = Math.pow(8, (this.input.length - index - 1))
      returnValue += multiplier * Number(this.input[index]);
    }
    return returnValue;
  } else {
    return 0;
  }
};

Octal.prototype.isValid = function () {
  if (!Number(this.input)) return false;
  for (let index = 0; index < this.input.length; index += 1) {
    if (Number(this.input[index]) >= 8) return false;
  }
  return true;
}

module.exports = Octal;
/*
P: constructor that returns object with method slices.
returns all the possible consecutive numbers

D input as string
ouptput as numbers in an array

set return array
set iterator = 0
while (iterator + length < string.length)
  substring the length
  push each character as number into array
  push that array into total result
  iterator += 1
return the array

*/

function Series(initialValue) {
  this.initial = initialValue;
}

Series.prototype.slices = function(digits) {
  this.validateSeries(digits)
  let returnArray = [];
  let iterator = 0;
  while (iterator + digits <= this.initial.length) {
    let subArray = []
    let sub = this.initial.substring(iterator, iterator + digits);
    for (let index = 0; index < sub.length; index += 1) {
      subArray.push(Number(sub[index]));
    }
    returnArray.push(subArray);
    iterator += 1;
  }
  return returnArray;
}

Series.prototype.validateSeries = function(digits) {
  if (digits > this.initial.length) throw new Error('too many digits homie')
}

module.exports = Series;
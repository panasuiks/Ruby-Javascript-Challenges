/*
P: given list of numbers provide sum of the multiples that are less than the provided number.

D: constructor input is a list of numbers (default is 5, 3)
for loop populating an array
return the array reduced sum
if > 3 char
  add underscores
*/

function SumOfMultiples(...nums) {
  if (nums.length > 0) {
    this.numbers = nums;
  } else {
    this.numbers = [3, 5]
  }
  return this;
}

SumOfMultiples.prototype.to = function(max) {
  let multiples = [];
  this.numbers.forEach(multiple => {
    let iterator = 1;
    while(true) {
      if (iterator * multiple < max) {
        if (!multiples.includes(iterator*multiple)) multiples.push(iterator*multiple);
        iterator += 1;
      } else {
        break;
      }
    }
  })
  let returnNumber =  multiples.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return returnNumber;
};

SumOfMultiples.to = function(max) {
  let newObj = new SumOfMultiples();
  return newObj.to(max);
};

console.log(SumOfMultiples.to(10));

module.exports = SumOfMultiples;
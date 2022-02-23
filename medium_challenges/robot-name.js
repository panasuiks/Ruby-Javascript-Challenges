/*
P: make new robot, give it a random name
can't have names overlap (check name database)

constructor function
  this.name = this.randomName (local variable keeps track of names used)
*/

function Robot() {
  this.reset();
}

Robot.prototype.name = function() {
  return this.title;
}

let takenNames = ['']
Robot.prototype.reset = function () {
  let name = '';
  while (takenNames.includes(name)) {
    name = randomLetters(2) + randomNumbers(3)
  }
  this.title = name;
  takenNames.push(name);

  function randomLetters(quantity = 2) {
    let string = ''
    for (let num = 1; num <= quantity; num += 1) {
      string += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }
    return string;
  }
  function randomNumbers(quantity = 3) {
    let string = ''
    for (let num = 1; num <= quantity; num += 1) {
      string += String(Math.floor(Math.random() * 10));
    }
    return string;
  }
}

module.exports = Robot;
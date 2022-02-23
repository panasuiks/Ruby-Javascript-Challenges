/*
P: string as input, scrabble score as output
case insensitive?
Spaces allowed?

E:

D: string as input
  For loop through string
    add letter value to summed number

  function(string) {
    let result 
    for loop through string
      add value of character to result
    return result;
  }

Scrabble
  string property
  score()


*/

class Scrabble {
  constructor(strand) {
    this.word = strand;
  }
  static score(inpString) {
    let result = 0;
    if (inpString) {
      for (let index = 0; index < inpString.length; index += 1) {
        let char = inpString[index].toUpperCase()
        result += Scrabble.points[char] || 0
      }
    }
    return result;
  }

  static points = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }
  score() {
    return this.constructor.score(this.word);
  }
}

module.exports = Scrabble;
/*
P: given a letter create a diamond (letter corresponds with diamond size)

D: input is a letter output is a string
process each line as an array
join with /n

C:
let num = determine what number the letter is (a = 1, b = 2 etc) // 3 for example


for loop to create the top half + 1 of the array
  for (let line = 1; line >= num; line += 1)
    first line = spaces repeated until letter number - 1, then letters[line]
    second line =  num - line number spaces, letters[line], line * 2 - 3, letters[line]

for loop to create the bottom half - 1 of the array
  copy original length - index


  2 = 1
  3 = 3
  4 = 5
  5 = 7
  6 = 9


*/

let obj = {
  letters: [, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  
  makeLine(line, midLine) {
    if (line === 1) {
      let firstSpaces = ' '.repeat(midLine - 1);
      return firstSpaces + this.letters[1] + firstSpaces
    } else {
      let firstSpaces = ' '.repeat(midLine - line);
      return firstSpaces + this.letters[line] +
        ' '.repeat(line * 2 - 3) + this.letters[line] + firstSpaces;
    }
  },

  makeDiamond(letter) {
    let midLine = this.letters.indexOf(letter.toUpperCase());
    let stringArray = [];
    for (let line = 1; line <= midLine; line += 1) {
      stringArray.push(this.makeLine(line, midLine));
    }
    for (let bottomLine = stringArray.length - 1; bottomLine >= 1; bottomLine -= 1) {
      stringArray.push(this.makeLine(bottomLine, midLine))
    }

    return stringArray.join('\n') + '\n';
  }
}

module.exports = obj;
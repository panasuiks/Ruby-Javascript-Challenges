/*
P: given number(s) return the verse(s)
given no number, provide the whole song.

*/

let BeerSong = {
  verse(inpNum) {
    if (inpNum >= 3) {
      return `${inpNum} bottles of beer on the wall, ${inpNum} bottles of beer.\n` +
                   `Take one down and pass it around, ${inpNum - 1} bottles of beer ` +
                   `on the wall.\n`;
    } else if (inpNum === 2) {
      return `${inpNum} bottles of beer on the wall, ${inpNum} bottles of beer.\n` +
                   `Take one down and pass it around, ${inpNum - 1} bottle of beer ` +
                   `on the wall.\n`;
    }else if (inpNum === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
                   `Take it down and pass it around, no more bottles ` +
                   `of beer on the wall.\n`;
    } else if (inpNum === 0) {
      return "No more bottles of beer on the wall, no more " +
                   "bottles of beer.\nGo to the store and buy some " +
                   "more, 99 bottles of beer on the wall.\n";
    }
  },

  verses (start, end) {
    let first = true;
    let string = ''
    for (let index = start; index >= end; index -= 1) {
      if (!first) {
        string += '\n'
      }
      first = false;
      string += this.verse(index);
    }
    return string;
  },

  lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
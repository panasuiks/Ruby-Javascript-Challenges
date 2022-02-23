/*
P: create an object with a base word and a method that when provided a list of strings returns valid anagrams
going to make it case insensitive
identical word is not an anagram
no subsets

D: input is string to class
   input is array of strings to methods
   filter array and check if it is anagram

class anagram
  constructor 
    base word = argument
  checkAnagram(string)
    convert both to lowercase
    if equal or not same length, return false
    sort
    return string1 === string2


    convert to arrays
    for loop through one array
      let index = array1.indexOf(char)
      if index >= 0
        array1.splice(index, 1)

    return (array1.length === 0) 
    return (string is anagram of this.baseword)
  detector(array)
    return array.filter(this.checkAnagram)
*/

class Anagram {
  constructor(string) {
    this.base = string.toLowerCase();
  };
  isAnagram(inpString) {
    inpString = inpString.toLowerCase();
    if (this.base.length !== inpString.length || this.base === inpString) return false;
    let baseSorted = this.base.split('').sort().join('');
    let inpStringSorted = inpString.split('').sort().join('');
    return (baseSorted === inpStringSorted)
  }
  match(candidates) {
    return candidates.filter(this.isAnagram, this);
  }
}
module.exports = Anagram;
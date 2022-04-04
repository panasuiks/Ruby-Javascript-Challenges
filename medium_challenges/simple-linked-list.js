/*
element constructor makes new element and adds it to a list of elements
  if two arguments provided, return second in next()
isTail() checks to see if it's the last in the list
next() returns the next element in the list
datum returns value

list constructor takes no arguments
push adds to list
size reports list size
peek reports null if empty or size if populated
head() returns instance of element
pop returns item and reduces size
fromArray returns linked list created from array


*/
class Element {
  constructor(location, priorElement = null) {
    this.location = location;
    this.prior = priorElement

  }
  datum() {
    return this.location;
  }
  isTail() {
    return !this.prior;
  }
  next() {
    return this.prior;
  }
}

let element1 = new Element(1);
let element2 = new Element(2, element1);
console.log(element2.next() === element1)



// module.exports = { SimpleLinkedList, Element }
class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
    if (!this.isValid()) throw new Error('Invalid Entry');
  }
  kind() {
    let short = this.sides[0];
    if (this.sides.every(side => side === short)) {
      return 'equilateral';
    }
    for (let index = 0; index < this.sides.length; index += 1) {
      let current = this.sides[index];
      let others = this.sides.slice();
      others.splice(index, 1);
      if (others.includes(current)) return 'isosceles'
    }
    return 'scalene';
  }
  isValid() {
    return (this.sides.length === 3 &&
      this.sides[0] > 0 &&
      this.sides[0] + this.sides[1] > this.sides[2])
  }
}

module.exports = Triangle;
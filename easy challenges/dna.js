class DNA {
  constructor(strand) {
    this.strand = strand;
  }
  hammingDistance(userStrand) {
    let shortStrand;
    let longStrand;
    if (this.strand.length < userStrand.length) {
      [shortStrand, longStrand] = [this.strand, userStrand];
    } else {
      [shortStrand, longStrand] = [userStrand, this.strand];
    }
    let result = [].filter.call(shortStrand, (character, index) => {
      return character !== longStrand[index];
    })
    return result.length;
  };
  
}

module.exports = DNA;
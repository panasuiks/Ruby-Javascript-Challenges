class RomanNumeral {
  static ROMAN_NUMERALS = {
    I: 1,
   IV: 4,
    V: 5,
   IX: 9,
    X: 10,
   XL: 40,
    L: 50,
   XC: 90,
    C: 100,
   CD: 400,
    D: 500,
   CM: 900,
    M: 1000,
 }
  constructor(number) {
    this.number = number;
  }
  toRoman() {
    let returnString = ''
    let currentValue = this.number;
    let romanNums = Object.entries(RomanNumeral.ROMAN_NUMERALS)
    romanNums.sort((a, b) => {
      return b[1] - a[1]
    })
    romanNums.forEach(entry => {
      let romanChar = entry[0]
      let romanValue = entry[1]
      if (currentValue >= romanValue) {
        let amount = Math.floor(currentValue / romanValue);
        returnString += romanChar.repeat(amount);
        currentValue -= romanValue * amount;
      }
    })
    return returnString;
  }

  //   let currentNumber = this.number;
  //   let returnString = ''
  //   if (currentNumber >= 1000) {
  //     let amount = Math.floor(currentNumber / 1000);
  //     returnString += 'M'.repeat(amount);
  //     currentNumber -= 1000 * amount;
  //   }
  //   if (currentNumber >= 900) {
  //     returnString += 'CM';
  //     currentNumber -= 900;
  //   }
  //   if (currentNumber >= 500) {
  //     returnString += 'D';
  //     currentNumber -= 500;
  //   }
  //   if (currentNumber >= 400) {
  //     returnString += 'CD'
  //     currentNumber -= 400;
  //   }
  //   if (currentNumber >= 100) {
  //     let amount = Math.floor(currentNumber / 100);
  //     returnString += 'C'.repeat(amount);
  //     currentNumber -= amount * 100;
  //   }
  //   if (currentNumber >= 90) {
  //     returnString += 'XC'
  //     currentNumber -= 90;
  //   }
  //   if (currentNumber >= 50) {
  //     returnString += 'L';
  //     currentNumber -= 50;
  //   }
  //   if (currentNumber >= 40) {
  //     returnString += 'XL';
  //     currentNumber -= 40;
  //   }
  //   if (currentNumber >= 10) {
  //     let amount = Math.floor(currentNumber / 10);
  //     returnString += 'X'.repeat(amount);
  //     currentNumber -= amount * 10;
  //   }
  //   if (currentNumber >= 9) {
  //     returnString += 'IX';
  //     currentNumber -= 9;
  //   }
  //   if (currentNumber >= 5) {
  //     returnString += 'V';
  //     currentNumber -= 5;
  //   }
  //   if (currentNumber >= 4) {
  //     returnString += 'IV';
  //     currentNumber -= 4;
  //   }
  //   if (currentNumber > 0) {
  //     returnString += 'I'.repeat(currentNumber);
  //     currentNumber = 0;
  //   }
  //   return returnString;
  // }
}

module.exports = RomanNumeral;

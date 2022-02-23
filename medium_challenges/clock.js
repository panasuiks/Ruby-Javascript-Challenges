/*
P: clock that sets time with at() and then can add or subtract mins.

toBe(hour, mins) sets time
*/

let Clock = {
  at(hours = 0, minutes = 0) {
    function createNumString(inpNum) {
      return (String(inpNum).length === 1) ? '0' + inpNum : String(inpNum)
    }
    return {
      hours,
      minutes,
      toString() {
        return createNumString(this.hours) + ':' + createNumString(this.minutes);
      },
      add(minutes) {
        this.minutes += minutes;
        if (this.minutes >= 60) {
          let additionalHours = Math.floor(this.minutes / 60);
          this.hours += additionalHours;
          this.minutes = this.minutes - additionalHours * 60;
        }
        if (this.hours >= 24) {
          this.hours = Math.round(this.hours % 24) 
        }
        return this;
      },
      subtract(minutes) {
        this.minutes -= minutes;
        if (this.minutes < 0) {
          let lessHours = Math.abs(Math.floor(this.minutes / 60));
          this.hours -= lessHours;
          this.minutes = 60 - Math.abs(this.minutes) % 60;
        }
        if (this.hours < 0) {
          this.hours = 24 - Math.round(Math.abs(this.hours) % 24) 
        }
        return this;
      },
      isEqual(clock) {
        return this.toString() === clock.toString()
      }
    }
  }
}


 module.exports = Clock;
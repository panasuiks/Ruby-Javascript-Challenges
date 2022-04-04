/*


*/

const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday',
'friday', 'saturday'];

const QUANTITYOPTIONS = ['first', 'second', 'third', 'fourth', 'fifth'];

function Meetup(year, month) {
  this.year = year;
  this.month = month;
  this.firstDate = new Date(year, month - 1, 1);
}

Meetup.prototype.day = function (weekday, schedule) {
  
  let day = DAYS.indexOf(weekday.toLowerCase()) - this.firstDate.getUTCDay()
  day = (day >= 0) ? day + 1 : 7 + day + 1;
  if (QUANTITYOPTIONS.includes(schedule.toLowerCase())) {
    day += 7 * QUANTITYOPTIONS.indexOf(schedule.toLowerCase());
  } else if (schedule.toLowerCase() === 'last') {
    day = this.getLastDay(day);
  } else if (schedule.toLowerCase() === 'teenth') {
    while (day < 13) {
      day += 7
    }
  }
  let newDate = new Date(this.year, this.month - 1, day);
  if (newDate.getUTCMonth() === this.month - 1) return newDate
  else return null;
}

Meetup.prototype.getLastDay = function(day) {
  while (true) {
    let currentDate = new Date(this.year, this.month - 1, day + 7)
    if (currentDate.getUTCMonth() !== this.month - 1) {
      break
    }
    day += 7;
  }
  return day;
}



/*
Figure out first day (compare firstDate day to desired day and add)
If first through fifth
  add 7 for each
if last 
  while (date is valid) {
    add 7, make new date
  }
if teenth
  while (day < 13 && day > 19)
    add 7 to day
 
make date
return date
*/


module.exports = Meetup;

let x = new Meetup(2022, 3);
console.log(x.day('TuEsDay', 'second').toString())

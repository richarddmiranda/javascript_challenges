class Meetup {

  static DAY_OF_WEEK = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday',
  }

  static DAY_OF_WEEK_OF_MONTH = {

    first: [1, 2, 3, 4, 5, 6, 7],
    second: [8, 9, 10, 11, 12, 13, 14],
    third: [15, 16, 17, 18, 19, 20, 21],
    fourth: [22, 23, 24, 25, 26, 27, 28],
    last: [29, 30, 31],

  }

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.firstDay = this.findFirstDayOfMonth()
    
  }

  findFirstDayOfMonth() {
    let firstDayOfMonth = new Date(this.year, this.month, 1).getDay()  
   
    return Meetup.DAY_OF_WEEK[firstDayOfMonth];
    
  }

  day(weekday, schedule) {
    let scheduledWeek = Meetup.DAY_OF_WEEK_OF_MONTH[schedule];

    for (let i = 0; i < scheduledWeek.length; i++) {
      let date = new Date(this.year, this.month, scheduledWeek[i])
      let dayOfWeek = Meetup.DAY_OF_WEEK[date.getDay()]
      if (dayOfWeek.toLowerCase() === weekday.toLowerCase()) return date.toString();
    }
  }

}

let date = new Meetup(2013, 3);
console.log(date.day('Tuesday', 'second'))


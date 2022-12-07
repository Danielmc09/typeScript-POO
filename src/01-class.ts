const date = new Date()

date.getHours()
date.getTime()
date.toISOString()

console.log(date)

const date2 = new Date(1994, 8, 17) // año - mes -día

date2.getHours()
date2.getTime()
date2.toISOString()

console.log(date2)

export class myDate{
  year:number;
  month:number;
  day:number;

  constructor(year:number, month:number, day:number){
    this.year = year
    this.month = month
    this.day = day
  }
}

const myDate2 = new myDate(1994, 8, 17)

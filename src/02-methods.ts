export class myDate{
  year:number;
  month:number;
  day:number;

  constructor(year:number, month:number, day:number){
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string{
    return `${this.year}/${this.month}/${this.day}`
  }

  add(amount:number, type: 'day' | 'month' | 'year'){
    if (type === 'day') this.day += amount
    if (type === 'month') this.month += amount
    if (type === 'year') this.year += amount
  }
}

const date = new myDate(1994, 9, 9)
console.log(date)
console.log(date.printFormat())
date.add(3, 'day')
console.log(date.printFormat())
console.log(date.year)
console.log(date.day)
console.log(date.month)

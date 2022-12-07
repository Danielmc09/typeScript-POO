export class myDate{
  private year:number;
  private month:number;
  private day:number;

  constructor(year:number, month:number, day:number){
    this.year = year
    this.month = month
    this.day = day
  }

  private addPadding(value:number){
    if (value < 10) return `0${value}`
    return `${value}`
  }

  printFormat(): string{
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${this.year}/${month}/${day}`
  }

  add(amount:number, type: 'day' | 'month' | 'year'){
    if (type === 'day') this.day += amount
    if (type === 'month') this.month += amount
    if (type === 'year') this.year += amount
  }
}

const date = new myDate(1994, 9, 9)
console.log(date.printFormat())


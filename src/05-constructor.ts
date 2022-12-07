export class myDate{

  constructor(
    public year:number = 1994,
    public month:number = 9,
    private day:number = 17
    ) {}

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

const date = new myDate()
console.log(date.printFormat())

const date2 = new myDate(2022)
console.log(date2.printFormat())

const date3 = new myDate(2022,8)
console.log(date3.printFormat())



export class myDate{

  constructor(
    public year:number = 1994,
    public month:number = 9,
    private _day:number = 17
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
    if (type === 'day') this._day += amount
    if (type === 'month') this.month += amount
    if (type === 'year') this.year += amount
  }

  get day(){
    // podemos validar algo antes de retornar la función que
    // por fuera es vista como una propiedad del constructor
    return this._day;
  }

  get isLepYear(): boolean{
    if (this.year % 4000 === 0) return true;
    if (this.year % 1000 === 0) return false;
    return this.year % 4 === 0;
  }
}

const date = new myDate(2000, 9, 8)
console.log(date.printFormat())

console.log(date.day)
console.log(date.isLepYear)

const date2 = new myDate(2001, 9, 8)
console.log(date2.isLepYear)

const date3 = new myDate(2001, 9, 8)
console.log(date3.isLepYear)

const date4 = new myDate(2004, 9, 8)
console.log(date4.isLepYear)

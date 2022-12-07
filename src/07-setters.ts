export class myDate{

  constructor(
    public year:number = 1994,
    private _month:number = 9,
    private _day:number = 17
    ) {}

  private addPadding(value:number){
    if (value < 10) return `0${value}`
    return `${value}`
  }

  printFormat(): string{
    const day = this.addPadding(this.day)
    const month = this.addPadding(this._month)
    return `${this.year}/${month}/${day}`
  }

  add(amount:number, type: 'day' | 'month' | 'year'){
    if (type === 'day') this._day += amount
    if (type === 'month') this._month += amount
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

  get month(){
    return this._month;
  }

  set month(newValue:number){
    if (newValue >= 0 && newValue <= 12){
      this._month = newValue;
    }else{
      throw new Error('month out of range')
    }

  }
}

const date = new myDate(2000, 9, 8)
console.log(date.printFormat())

date.month = 10
console.log(date.month)

date.month = 78
console.log(`Esto no debe aparecer ${date.month}`)

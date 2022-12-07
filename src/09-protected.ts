export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    return `Moving along!`;
  }

  greeting() {
    return `Hello, I'm ${this.name}!`;
  }

  protected doSomething(){
    console.log(`dooo`)
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
    ) {
    super(name);
  }

  woof(times: number): void {
    for (var i = 0; i < times; i++) {
      console.log('Woof!');
    }
    this.doSomething();
  }

  move() {
    // code
    //super.move();
    return 'Moviendo la colita'
  }
}

const cheis = new Dog('cheis', 'Dani');
console.log(cheis.woof(1));
console.log(cheis)
console.log(cheis.move())

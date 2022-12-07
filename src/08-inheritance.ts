export class Animal {
  constructor(public name: string) {}

  moveBy() {
    return `Moving along!`;
  }

  greeting() {
    return `Hello, I'm ${this.name}!`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (var i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

const fifi = new Animal('Fifiii');
console.log(fifi.moveBy());
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'Dani');
console.log(cheis.moveBy());
console.log(cheis.greeting());
console.log(cheis.woof(5));
console.log(cheis);

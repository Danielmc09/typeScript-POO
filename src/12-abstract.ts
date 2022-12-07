import { Animal, Dog } from './09-protected';

// al ser una clase abstract no nos permite instanciar la clase padre

// const animal = new Animal('elite')
// animal.greeting();

const dog = new Dog('cheis', 'Dani')
console.log(dog.greeting());
console.log(dog.move());


import square, { greet, PI, idGenerator } from './utils.js';

console.log('ES6 Node demo — basic features');

console.log(greet('Learner'));

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => square(n));
console.log('squares:', squares);

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const d = new Dog('Rex');
console.log(d.speak());

console.log('PI ~', PI.toFixed(4));

const gen = idGenerator();
console.log('ids:', gen.next().value, gen.next().value, gen.next().value);

// async/await example
async function asyncDemo() {
  const wait = ms => new Promise(res => setTimeout(res, ms));
  await wait(100);
  return 'async done';
}

asyncDemo().then(console.log);

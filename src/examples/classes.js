/**
 * Classes & Inheritance
 */

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}

if (require.main === module) {
    const d = new Dog('Buddy');
    console.log(d.speak());
}

module.exports = { Animal, Dog };

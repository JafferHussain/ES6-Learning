// ============================================
// ES6 Features Learning Examples
// ============================================

// 1. Arrow Functions
const add = (a, b) => a + b;
console.log("Arrow Function:", add(5, 3)); // Output: 8

const mul = (a, b) => a * b;
console.log("Arrow Function:", mul(5, 3)); // Output:15

// 2. Template Literals
const name = "Jaffer";
const greeting = `Hello, ${name}! Welcome to ES6 Learning.`;
console.log(greeting);

// 3. Destructuring - Objects
const person = { firstName: "John", lastName: "Doe", age: 30 };
const { firstName, lastName, age } = person;
console.log(`Person: ${firstName} ${lastName}, Age: ${age}`); // Output: Person: John Doe, Age: 30

const product = { id: 101, custname: "Laptop", price: 999.99 };
const { id, custname, price } = product;
console.log(`Product ID: ${id}, Name: ${custname}, Price: $${price}`); // Output: Product ID: 101, Name: Laptop, Price: $999.99

// 4. Destructuring - Arrays
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(`First color: ${firstColor}, Second color: ${secondColor}`); //

// 5. Classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks

// 6. Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

// 7. Spread Operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log("Spread Operator:", array2); // Output: [1, 2, 3, 4, 5]

// 8. const and let (Block Scope)
{
    let blockScoped = "I'm block scoped";
    const constant = "I cannot be reassigned";
    console.log(blockScoped, constant);
}

// 9. For...of Loop
console.log("For...of Loop:");
for (const color of colors) {
    console.log(color);
}

// 10. Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
};

fetchData().then((data) => console.log(data));

console.log("ES6 Learning Project Setup Complete!");

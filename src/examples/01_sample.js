
// 01_arrow function example
// const addValues = (a, b) => {
//     return a + b;
// }

// const addValues = (a, b) => a + b;

// if (require.main === module) {
//     console.log(addValues(2, 4));
// }
// module.exports = { addValues };
//...................................................................

//02_var,let and const example
// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;  // same variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }
// function letTest() {
//     let y = 1;
//     if (true) {
//         let y = 2;  // different variable
//         console.log(y);  // 2
//     }
//     console.log(y);  // 1
// }

// function constTest() {
//     const z = 1;
//     // z = 2; // This will cause an error
//     console.log(z); // 1
// }


// if (require.main === module) {
//     varTest();
//     letTest();
//     constTest();
// }
// module.exports = { varTest, letTest, constTest };
//...................................................................
//03_conditional statements example
// function checkNumber(num) {
//     if (num > 0) {
//         return 'Positive';
//     } else if (num < 0) {
//         return 'Negative';
//     } else {
//         return 'Zero';
//     }
// }
// if (require.main === module) {
//     console.log(checkNumber(5));   // Positive
//     console.log(checkNumber(-3));  // Negative
//     console.log(checkNumber(0));   // Zero
// }
// module.exports = { checkNumber };
//...................................................................
//04_switch case example
// function getDayName(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         case 7:
//             return 'Sunday';
//         default:
//             return 'Invalid day number';
//     }
// }
// if (require.main === module) {
//     console.log(getDayName(3)); // Wednesday
//     console.log(getDayName(8)); // Invalid day number
// }
// module.exports = { getDayName };
//...................................................................
//05_template literals example
// function greet(name) {
//     return `Hello, ${name}! Welcome to ES6.`;
// }

// if (require.main === module) {
//     console.log(greet('Jaffer')); // Hello, Jaffer! Welcome to ES6.
// }
// module.exports = { greet };
//...................................................................
//06_default parameters example
// function multiply(a, b = 2) {
//     return a * b;
// }
// if (require.main === module) {
//     console.log(multiply(5));    // 10
//     console.log(multiply(5, 3)); // 15
// }
// module.exports = { multiply };
//...................................................................
//07_looping statements like different flavor of for, while, do...while example
function sumWithFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function sumWithForOf(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function GetkeyValueForIn(obj) {
    const result = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}

function objectKeys(obj) {
    return Object.keys(obj);
}
function factorialWhile(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}
function firstIterationDoWhile(arr) {
    let i = 0;
    const result = [];
    do {
        result.push(arr[i]);
        i++;
    } while (i < arr.length);
    return result;
}
if (require.main === module) {
    console.log('sumWithFor:', sumWithFor([1, 2, 3])); // Output: 6
    console.log('sumWithForOf:', sumWithForOf([1, 2, 3])); // Output: 6
    console.log('GetkeyValueForIn:', GetkeyValueForIn({ a: 1, b: 2 })); // Output: [['a', 1], ['b', 2]]
    console.log('objectKeys:', objectKeys({ a: 1, b: 2 })); // Output: ['a', 'b']
    console.log('factorialWhile(5):', factorialWhile(5));// Output: 120
    console.log('firstIterationDoWhile:', firstIterationDoWhile(['a', 'b'])); // Output: ['a', 'b']
}

module.exports = { sumWithFor, sumWithForOf, GetkeyValueForIn, objectKeys, factorialWhile, firstIterationDoWhile };

//...................................................................


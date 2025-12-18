/*
  ES6 Loops and Conditional Operators — Examples and Explanations

  Each section contains a short explanation followed by runnable examples.
*/

// ---------- Loops ----------

// 1) Classic `for` loop — good when you need an index
const sumWithFor = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// 2) `for...of` — ES6 friendly iterator for arrays (values only)
const sumWithForOf = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
};

// 3) `for...in` — iterates object keys (use with care on arrays)
const objectKeys = (obj) => {
    const keys = [];
    for (const k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) {
            keys.push(k);
        }
    }
    return keys;
};

// 4) `while` loop
const factorialWhile = (n) => {
    let i = n;
    let result = 1;
    while (i > 1) {
        result *= i;
        i -= 1;
    }
    return result;
};

// 5) `do...while` — runs body at least once
const firstIterationDoWhile = (arr) => {
    let i = 0;
    const out = [];
    do {
        out.push(arr[i]);
        i += 1;
    } while (i < arr.length);
    return out;
};

// 6) Array helpers (functional style) — `forEach`, `map`, `filter`, `reduce`
const doubleWithMap = (arr) => arr.map((x) => x * 2);
const evensWithFilter = (arr) => arr.filter((x) => x % 2 === 0);
const sumWithReduce = (arr) => arr.reduce((acc, x) => acc + x, 0);

// ---------- Conditional Operators ----------

// `if`, `else if`, `else`
const ageCategory = (age) => {
    if (age < 13) return 'child';
    if (age < 20) return 'teen';
    return 'adult';
};

// Ternary operator — compact conditional expression
const canDrive = (age) => (age >= 16 ? 'yes' : 'no');

// Logical operators used as conditionals — `||`, `&&`
// `||` returns the first truthy value
const defaultMessage = (msg) => msg || 'Default message';

// Nullish coalescing `??` — returns right-hand side only when left is null/undefined
const defaultStrict = (value, fallback) => (value ?? fallback);

// Optional chaining `?.` — safely access nested properties
const getStreet = (user) => user?.address?.street ?? null;

// Switch statement — useful when checking multiple discrete cases
const dayName = (n) => {
    switch (n) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default: return 'Invalid day';
    }
};

// Small demo runner (prints examples) — useful when running `node src/loops_and_conditionals.js`
if (require.main === module) {
    console.log('sumWithFor:', sumWithFor([1, 2, 3])); // Output: 6
    console.log('sumWithForOf:', sumWithForOf([1, 2, 3])); //
    console.log('objectKeys:', objectKeys({ a: 1, b: 2 }));
    console.log('factorialWhile(5):', factorialWhile(5));
    console.log('firstIterationDoWhile:', firstIterationDoWhile(['a', 'b']));
    console.log('doubleWithMap:', doubleWithMap([1, 2, 3]));
    console.log('evensWithFilter:', evensWithFilter([1, 2, 3, 4]));
    console.log('sumWithReduce:', sumWithReduce([1, 2, 3]));
    console.log('ageCategory(15):', ageCategory(15));
    console.log('canDrive(15):', canDrive(15));
    console.log('defaultMessage(undefined):', defaultMessage(undefined));
    console.log('defaultStrict(null, 42):', defaultStrict(null, 42));
    console.log('getStreet({}):', getStreet({}));
    console.log('dayName(3):', dayName(3));
}

module.exports = {
    sumWithFor,
    sumWithForOf,
    objectKeys,
    factorialWhile,
    firstIterationDoWhile,
    doubleWithMap,
    evensWithFilter,
    sumWithReduce,
    ageCategory,
    canDrive,
    defaultMessage,
    defaultStrict,
    getStreet,
    dayName,
};

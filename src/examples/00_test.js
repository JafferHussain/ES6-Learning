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
    }
    while (i < arr.length);
    return out;
};

// `if`, `else if`, `else`
const conditionalExample = (value) => {
    if (value === 0) {
        return "zero";
    } else if (value > 0) {
        return "positive";
    } else {
        return "negative";
    }
};

// Ternary operator — compact conditional expression
const ternaryExample = (value) => (value % 2 === 0 ? "even" : "odd");

// Logical operators used as conditionals — `||`, `&&`
// `||` returns the first truthy value
const logicalOrExample = (a, b) => a || b;
// `&&` returns the first falsy value or the last value if all are truthy
const logicalAndExample = (a, b) => a && b;

// Nullish coalescing `??` — returns right-hand side only when left is null/undefined
const nullishCoalescingExample = (a, b) => a ?? b;

// Optional chaining `?.` — safely access nested properties
const optionalChainingExample = (obj) => obj?.prop?.subProp;

// Switch statement — useful when checking multiple discrete cases
const switchExample = (value) => {
    switch (value) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        default:
            return 'other';
    }
};

if (require.main === module) {
    console.log('sumWithFor:', sumWithFor([1, 2, 4])); // Output: 7
    console.log('sumWithForOf:', sumWithForOf([1, 2, 6])); // Output: 9
    console.log('objectKeys:', objectKeys({ a: 1, b: 2 })); // Output: ['a', 'b']
    console.log('factorialWhile:', factorialWhile(5)); // Output: 120
    console.log('firstIterationDoWhile:', firstIterationDoWhile([1, 2, 3])); // Output: [1]
    console.log('conditionalExample:', conditionalExample(-3)); // Output: "negative"
    console.log('ternaryExample:', ternaryExample(4)); // Output: "even"
    console.log('logicalOrExample:', logicalOrExample(0, 5)); // Output: 5
    console.log('logicalAndExample:', logicalAndExample(0, 5)); // Output: 0
    console.log('nullishCoalescingExample:', nullishCoalescingExample(null, 'hello')); //
    console.log('nullishCoalescingExample:', nullishCoalescingExample('test', 'default')); // Output: "test"
    console.log('optionalChainingExample:', optionalChainingExample({ prop: { subProp: 42 } })); // Output: 42
    console.log('optionalChainingExample:', optionalChainingExample({ })); // Output: undefined
    console.log('switchExample:', switchExample(2)); // Output: "two"
}


module.exports = { sumWithFor, sumWithForOf, objectKeys, nullishCoalescingExample, optionalChainingExample, switchExample };
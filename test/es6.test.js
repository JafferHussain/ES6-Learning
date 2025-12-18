const assert = require('assert');

const { add, square } = require('../src/examples/arrow_functions');
const { greet, upperTag } = require('../src/examples/template_literals');
const { fullNameFromObj, swap } = require('../src/examples/destructuring');
const { Dog } = require('../src/examples/classes');
const { greet: greetDefault } = require('../src/examples/default_parameters');
const { concat, maxFromArray } = require('../src/examples/spread_rest');
const { blockScoped } = require('../src/examples/let_const');
const { sum } = require('../src/examples/for_of');
const { unique, mapFromPairs } = require('../src/examples/map_set');
const { delay, allExample } = require('../src/examples/promises');
const { collect } = require('../src/examples/generators');
const { uniqueKey } = require('../src/examples/symbols');
const { getExported } = require('../src/examples/modules_example');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(square(3), 9);
assert.strictEqual(greet('J', [1]).includes('J'), true);
assert.strictEqual(upperTag`hey ${'you'}`.includes('YOU'), true);
assert.strictEqual(fullNameFromObj({ first: 'A', last: 'B' }), 'A B');
assert.deepStrictEqual(swap([1, 2]), [2, 1]);
assert.strictEqual(new Dog('X').speak().includes('barks'), true);
assert.strictEqual(greetDefault(), 'Hello, Guest!');
assert.deepStrictEqual(concat([1], [2]), [1, 2]);
assert.strictEqual(maxFromArray([1, 9, 2]), 9);
assert.strictEqual(typeof blockScoped(), 'object');
assert.strictEqual(sum([1, 2, 3]), 6);
assert.deepStrictEqual(Array.from(unique([1, 1, 2])), [1, 2]);
assert.strictEqual(mapFromPairs([['a', 1]]).get('a'), 1);
assert.deepStrictEqual(collect(3), [0, 1, 2]);
assert.strictEqual(uniqueKey(), true);
assert.strictEqual(getExported(), 42);

// Promises are async — run and await them
delay(1).then((v) => {
    assert.strictEqual(v, 1);
    return allExample([1, 2]);
}).then((arr) => {
    assert.deepStrictEqual(arr, [2, 4]);
    console.log('All ES6 examples passed.');
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

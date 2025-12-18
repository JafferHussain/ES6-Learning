const assert = require('assert');
const {
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
} = require('../src/loops_and_conditionals');

// Simple assertions for the examples
assert.strictEqual(sumWithFor([1, 2, 3]), 6);
assert.strictEqual(sumWithForOf([1, 2, 3]), 6);
assert.deepStrictEqual(objectKeys({ a: 1, b: 2 }), ['a', 'b']);
assert.strictEqual(factorialWhile(5), 120);
assert.deepStrictEqual(firstIterationDoWhile(['x', 'y']), ['x', 'y']);
assert.deepStrictEqual(doubleWithMap([1, 2]), [2, 4]);
assert.deepStrictEqual(evensWithFilter([1, 2, 3, 4]), [2, 4]);
assert.strictEqual(sumWithReduce([1, 2, 3]), 6);
assert.strictEqual(ageCategory(10), 'child');
assert.strictEqual(ageCategory(16), 'teen');
assert.strictEqual(ageCategory(30), 'adult');
assert.strictEqual(canDrive(15), 'no');
assert.strictEqual(canDrive(20), 'yes');
assert.strictEqual(defaultMessage(undefined), 'Default message');
assert.strictEqual(defaultStrict(null, 42), 42);
assert.strictEqual(getStreet({}), null);
assert.strictEqual(dayName(3), 'Wednesday');

console.log('All loop and conditional examples passed.');

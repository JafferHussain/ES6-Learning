/**
 * Arrow Functions
 * - Shorter syntax for function expressions
 * - `this` is lexically bound (not re-bound like normal functions)
 */

const add = (a, b) => a + b;
const square = (x) => x * x;

if (require.main === module) {
    console.log('add(2,3)=', add(2, 3));
    console.log('square(4)=', square(4));
}

module.exports = { add, square };

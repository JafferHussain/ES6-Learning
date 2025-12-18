/**
 * Spread and Rest
 */

const concat = (...parts) => parts.flat();
const maxFromArray = (arr) => Math.max(...arr);

if (require.main === module) {
    console.log(concat([1, 2], [3, 4]));
    console.log(maxFromArray([5, 10, 3]));
}

module.exports = { concat, maxFromArray };

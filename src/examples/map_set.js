/**
 * Map and Set
 */

const unique = (arr) => new Set(arr);
const mapFromPairs = (pairs) => new Map(pairs);

if (require.main === module) {
    console.log(Array.from(unique([1, 2, 2, 3])));
    console.log(mapFromPairs([['a', 1], ['b', 2]]).get('a'));
}

module.exports = { unique, mapFromPairs };

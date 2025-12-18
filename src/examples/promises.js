/**
 * Promises
 */

const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(ms), ms));

const allExample = (arr) => Promise.all(arr.map((n) => Promise.resolve(n * 2)));

if (require.main === module) {
    delay(10).then((v) => console.log('delay resolved with', v));
    allExample([1, 2, 3]).then((r) => console.log('allExample', r));
}

module.exports = { delay, allExample };

/**
 * Generators & Iterators
 */

function* countUp(n) {
    for (let i = 0; i < n; i++) yield i;
}

const collect = (n) => [...countUp(n)];

if (require.main === module) {
    console.log(collect(5));
}

module.exports = { countUp, collect };

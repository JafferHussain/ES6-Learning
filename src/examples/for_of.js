/**
 * for...of loop
 */

const sum = (arr) => {
    let s = 0;
    for (const n of arr) s += n;
    return s;
};

if (require.main === module) {
    console.log(sum([1, 2, 3]));
}

module.exports = { sum };

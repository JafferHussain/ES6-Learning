/**
 * Destructuring (Objects & Arrays)
 */

const fullNameFromObj = (person) => {
    const { first, last } = person;
    return `${first} ${last}`;
};

const swap = ([a, b]) => [b, a];

if (require.main === module) {
    console.log(fullNameFromObj({ first: 'John', last: 'Doe' }));
    console.log(swap([1, 2]));
}

module.exports = { fullNameFromObj, swap };

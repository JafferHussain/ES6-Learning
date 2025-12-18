/**
 * Symbols
 */

const uniqueKey = () => {
    const s1 = Symbol('id');
    const s2 = Symbol('id');
    return s1 !== s2;
};

if (require.main === module) {
    console.log('Symbols unique?', uniqueKey());
}

module.exports = { uniqueKey };

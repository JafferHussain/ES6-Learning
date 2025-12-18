/**
 * let and const (block scoping)
 */

const blockScoped = () => {
    if (true) {
        let inner = 'inside';
        const constantObj = { a: 1 };
        // constantObj can be mutated but not reassigned
        constantObj.a = 2;
        return { inner, constantObj };
    }
};

if (require.main === module) {
    console.log(blockScoped());
}

module.exports = { blockScoped };

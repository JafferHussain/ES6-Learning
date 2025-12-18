/**
 * Default Parameters
 */

const greet = (name = 'Guest') => `Hello, ${name}!`;

if (require.main === module) {
    console.log(greet());
    console.log(greet('Alice'));
}

module.exports = { greet };

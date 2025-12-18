/**
 * Template Literals
 * - Backtick strings with interpolation and multi-line support
 */

const greet = (name, items = []) => `Hello, ${name}! You have ${items.length} items.`;

// Tagged template example: uppercase all substitutions
const upperTag = (parts, ...substs) => parts.reduce((acc, p, i) => acc + p + (substs[i] ? String(substs[i]).toUpperCase() : ''), '');

if (require.main === module) {
    console.log(greet('Jaffer', [1, 2]));
    console.log(upperTag`Hello ${'user'}, welcome!`);
}

module.exports = { greet, upperTag };

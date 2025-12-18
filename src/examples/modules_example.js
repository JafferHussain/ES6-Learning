/**
 * Modules (CommonJS-style for Node)
 */

const exportedValue = 42;
const getExported = () => exportedValue;

if (require.main === module) {
    console.log('exportedValue:', getExported());
}

module.exports = { exportedValue, getExported };

console.log('1. Script Start (Synchronous)');

setTimeout(() => {
    console.log('5. setTimeout 1 (Macrotask)');
}, 0);

setTimeout(() => {
    console.log('6. setTimeout 2 (Macrotask)');
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promise 1 (Microtask)');
}).then(() => {
    console.log('4. Promise 2 (Microtask)');
});

process.nextTick(() => {
    console.log('2. process.nextTick (Microtask - runs before Promise)');
});

console.log('7. Script End (Synchronous)');

// Expected Order:
// 1. Script Start
// 7. Script End
// 2. process.nextTick
// 3. Promise 1
// 4. Promise 2
// 5. setTimeout 1
// 6. setTimeout 2

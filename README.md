# ES6 Learning Project

A beginner-friendly project structure for learning modern JavaScript (ES6/ES2015+) features.

## Project Structure

```
ES6-Learning/
 src/
    index.js                    # Main entry point
    loops_and_conditionals.js   # Loops and conditionals examples
    examples/                   # Example files for each ES6 feature
 test/
    es6.test.js                # ES6 feature tests
    loops.test.js               # Loops and conditionals tests
    run-all.js                  # Test runner
 dist/                           # Compiled output (generated)
 package.json                    # Project dependencies
 README.md                       # This file
```

## Setup Instructions

### 1. Install Node.js (if not already installed)
Download from: https://nodejs.org/ (LTS version recommended)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Project

**Development Mode (with auto-rebuild):**
```bash
npm run dev
```
This watches your source files and automatically rebuilds when you make changes.

**Build Once:**
```bash
npm run build
```

**Run the Compiled Code:**
```bash
npm start
```

## What's Included

- **Babel**: Transpiles modern ES6+ code to ES5 for compatibility
- **Node.js Support**: Run JavaScript directly with Node.js
- **npm Scripts**: Convenient build and development commands
- **Test Suite**: Automated tests for learning verification

## ES6 Features Covered

The project includes comprehensive examples of modern JavaScript features:
- Arrow Functions
- Template Literals
- Destructuring (Objects & Arrays)
- Classes & Inheritance
- Default Parameters
- Spread & Rest Operators
- Block Scope (const, let)
- For...of Loop
- Promises
- Generators
- Symbols
- Map & Set Collections
- Modules & Import/Export
- Fetch API
- Event Loop

## Loops & Conditionals Examples

- **File:** src/loops_and_conditionals.js
- **Run demo:** `node src/loops_and_conditionals.js`
- **Run tests:** `npm test` (runs `test/loops.test.js` which verifies examples)

## ES6 Concept Examples

Separate example files under `src/examples/` covering common ES6 features:

- **Arrow functions:** src/examples/arrow_functions.js
- **Template literals:** src/examples/template_literals.js
- **Destructuring:** src/examples/destructuring.js
- **Classes:** src/examples/classes.js
- **Default parameters:** src/examples/default_parameters.js
- **Spread / Rest:** src/examples/spread_rest.js
- **let / const:** src/examples/let_const.js
- **for...of:** src/examples/for_of.js
- **Map / Set:** src/examples/map_set.js
- **Promises:** src/examples/promises.js
- **Generators:** src/examples/generators.js
- **Symbols:** src/examples/symbols.js
- **Modules (CommonJS):** src/examples/modules_example.js
- **Fetch API:** src/examples/FetchAPI.js
- **Event Loop:** src/examples/EventLoop.js

Run all example tests with:

```bash
npm test
```

Or run specific examples with npm scripts:
```bash
npm run example:fetchapi    # Run Fetch API example
npm run example:eventloop   # Run Event Loop example
```

## Recommended VS Code Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`

2. **Babel JavaScript**
   - ID: `mgmcdermott.vscode-language-babel`

3. **Code Runner**
   - ID: `formulahendry.code-runner`

## Learning Tips

1. Start by exploring `src/index.js` to understand ES6 syntax
2. Run individual example files to see them in action
3. Modify and add your own code examples
4. Use `npm run dev` during development for instant feedback
5. Run `npm start` to execute your compiled code
6. Check the `dist/` folder to see how Babel transpiles your code
7. Study the test files to understand expected behaviors

## Next Steps

- Learn about async/await patterns
- Explore ES6 module system (import/export)
- Practice with real-world projects
- Study functional programming concepts
- Explore newer features (ES2020+)

Happy Learning! 

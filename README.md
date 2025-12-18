# ES6 Learning Project

A beginner-friendly project structure for learning modern JavaScript (ES6/ES2015+) features.

## Project Structure

```
ES6/
├── src/
│   └── index.js          # Your ES6 source code
├── dist/                 # Compiled output (generated)
├── package.json          # Project dependencies
├── .babelrc              # Babel configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
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

## ES6 Features Covered

The `src/index.js` file includes examples of:
- Arrow Functions
- Template Literals
- Destructuring (Objects & Arrays)
- Classes & Inheritance
- Default Parameters
- Spread Operator
- Block Scope (const, let)
- For...of Loop
- Promises

## Loops & Conditionals Examples

- **File:** [src/loops_and_conditionals.js](src/loops_and_conditionals.js)
- **Run demo:** `node src/loops_and_conditionals.js`
- **Run tests:** `npm test` (runs `test/loops.test.js` which verifies examples)

## ES6 Concept Examples

I added separate example files under `src/examples/` covering common ES6 features. Quick list:

- **Arrow functions:** [src/examples/arrow_functions.js](src/examples/arrow_functions.js)
- **Template literals:** [src/examples/template_literals.js](src/examples/template_literals.js)
- **Destructuring:** [src/examples/destructuring.js](src/examples/destructuring.js)
- **Classes:** [src/examples/classes.js](src/examples/classes.js)
- **Default parameters:** [src/examples/default_parameters.js](src/examples/default_parameters.js)
- **Spread / Rest:** [src/examples/spread_rest.js](src/examples/spread_rest.js)
- **let / const:** [src/examples/let_const.js](src/examples/let_const.js)
- **for...of:** [src/examples/for_of.js](src/examples/for_of.js)
- **Map / Set:** [src/examples/map_set.js](src/examples/map_set.js)
- **Promises:** [src/examples/promises.js](src/examples/promises.js)
- **Generators:** [src/examples/generators.js](src/examples/generators.js)
- **Symbols:** [src/examples/symbols.js](src/examples/symbols.js)
- **Modules (CommonJS):** [src/examples/modules_example.js](src/examples/modules_example.js)

Run all examples' tests with:

```bash
npm test
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
2. Modify and add your own code examples
3. Use `npm run dev` during development for instant feedback
4. Run `npm start` to execute your compiled code
5. Check the `dist/` folder to see how Babel transpiles your code

## Next Steps

- Learn about async/await
- Explore modules (import/export)
- Practice with real-world projects
- Study functional programming concepts

Happy Learning! 🚀

# Example 3

This example is a express app that shows different ways of running TypeScript code.

# Usage

Compile and run:

```bash
$ npm run build
$ node dist/index.js
```

Using watch:

```bash
$ npm run watch

# In another terminal
$ node dist/index.js
```

Run directly:

```bash
npm start
```

Serve:

```bash
npm run serve
```

# Requirements

-   NodeJs
-   npm

# Explanation

We need to install some packages dev dependencies.

```bash
$ npm install --save-dev typescript ts-node ts-node-dev
```

-   `typescript`: TypeScript compiler
-   `ts-node`: Able to run TypeScript code directly.
-   `ts-node-dev`: Used to run TypeScript code as a dev-server

Then we will create the scripts we want:

**package.json**

```json
{
    // ...
    "scripts": {
        "build": "tsc",
        "watch": "tsc --watch",
        "start": "ts-node src/index.ts",
        "serve": "tsnd src/index.ts"
    }
}
```

The `build` and `watch` commands uses the regular typescript compiler:

```bash
tsc
tsc --watch
```

The `start` uses the package `ts-node`. It's used just as the regular `node` command. Just give it a TypeScript file and it will compile and run it in one go.

```bash
ts-node src/index.ts
```

The `serve` command uses the package `ts-node-dev`. It is similar to `nodemon`. It will compile and run TypeScript code. Then it will watch for any file changes. And if any changes happens it will stop the process if it's running, then re-compile the code and run it again. The command is called `tsnd`.

```bash
tsnd src/index.ts
```

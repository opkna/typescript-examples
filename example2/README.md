# Example 2

A simple program that prints the cpu's on the system

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

# Requirements

-   NodeJs
-   npm

# Explanation

## Setup

This time we want to use the NodeJS library `os`. For TypeScript to know all the types in that library we need to install type declations for NodeJS.

Most packages that don't include TypeScript declarations have them in a package with this format: `@types/<package-name>`. This is true for NodeJS also, so we can add `@types/node` to this project:

```bash
$ npm install --save-dev @types/node
```

Now we can import a NodeJS module just as you do in JavaScript and TypeScript will now what's in that module:

```ts
import * as os from "os";
```

## Configure TypeScript

This time we configure typescript with a file `tsconfig.json`:

**tsconfig.json**

```json
{
    "compilerOptions": {
        "outDir": "dist",
        "declaration": true,
        "declarationDir": "types",
        "removeComments": true,
        "target": "ES3"
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"]
}
```

Most configurations are self explanatory. Some notewort configs are:

-   `declaration`: Tell TypeScript that you want to output declaration files. This is so someone who want's to use this package can't get all types defined in your source code, even if it has been compiled to JavaScript
-   `declarationDir`: Name of the folder to put all declaration files.
-   `target`: What version of JavaScript you want your compiled code to be compatible with.

Now when compiling your code. Just call `tsc` without any arguments. It will find the `tsconfig.json` file in your working directory.

```json
{
    // ...
    "scripts": {
        "build": "tsc"
    }
}
```

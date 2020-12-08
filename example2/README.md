# Example 2

# Example 1

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

As you can see in `src/system_print.ts`, I have created a type called `PrintableValue`. This can be either a `string`, `number` or `boolean` value.

```ts
type PrintableValue = string | number | boolean;
```

## Compiling & Running

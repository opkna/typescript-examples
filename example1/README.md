# Example 1

A hello-world TypeScript example

# Usage

First compile the TypeScript code into JavaScript

```bash
$ npm run build
```

Then run the JavaScript code with NodeJS

```bash
$ node dist/index.js
```

# Requirements

-   NodeJs
-   npm

# Explanation

## Setup

To create this project start with a empty folder and initialize the package:

```bash
$ npm init -y
```

To be able to compile TypeScript into JavaScript you need the `typescript` package. Install it as a dev dependency:

```bash
$ npm install --save-dev typescript
```

This will add the `tsc` cli tool to the project, it stands for _*TypeScript Compiler*_.

Now create your source code in a folder called `src`. For now, just a simple helloworld program.

**src/index.ts**

```ts
console.log("Hello, world!");
```

Next, add a new script in `package.json`. Let's call it `build`.

**package.json**

```json
{
    "name": "example1",
    "version": "1.0.0",
    "main": "dist/index.js",
    "license": "MIT",
    "scripts": {
        "build": "tsc --outDir dist src/index.ts"
    },
    "devDependencies": {
        "typescript": "^4.1.2"
    }
}
```

The command lookes like this:

```bash
tsc --outDir dist src/index.ts
```

-   `tsc`: The command name.
-   `--outDir dist`: Declaring the folder where you want the compiled code to go.
-   `src/index.ts`: Relative path to the TypeScript file you want to compile.

## Compiling & Running

Now you can run the build command:

```bash
$ npm run build
```

As you can see, a folder called `dist` have been created with the file `index.js`. In this case, the compiled JavaScript code is identical to the TypeScript code. This is expected since we did not use any TypeScript features.

We can now run the code just as you would run any other JavaScript code. We'll use `node` here:

```bash
$ node dist/index.js
Hello, world!
```

## Git

We will most likely want to commit this awesome program to a git repo. When using TypeScript, your source code are the `.ts` files. And your compiled code is the `.js` files in the `dist` folder. Just as any other project, git should ignore all the compiled code. So in the `.gitignore` you should have `node_modules` as usual, and the `dist` folder:

**.gitignore**

```
node_modules
dist
```

Now you can commit and push to your repo.

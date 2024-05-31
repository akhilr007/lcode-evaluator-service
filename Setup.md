1.

```bash
npm init -y
```

2.

```bash
npm install -D typescript
```

3.

```bash
npx tsc --init
```

4.

```json
go to tsconfig.json and make
"outDir": "./dist",
"noImplicitAny": true,
"strictNullChecks": true,
"strictFunctionTypes": true,
"noUnusedLocals": true,
"exclude": ["node_modules"],
"include": ["./src/**/*.ts"]
```

5.

```bash
npm install -D @types/express
npm install -D nodemon
npm install concurrently
```

6.

```json
Add following scripts in package.json
"scripts": {
        "build": "npx tsc",
        "watch": "npx tsc -w",
        "prestart": "npm run build",
        "start": "npx nodemon dist/index.js",
        "dev": "npx concurrently --kill-others \"npm run watch\" \"npm run start\""
    }
```

7.

```bash
npm run dev
```

8.

```bash
npm install --save-dev eslint-plugin-simple-import-sort
```

9.

```json
"plugins": ["simple-import-sort"],
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
```

10.

```json
"scripts": {
    "prebuild": "npm run lint:fix",
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently \"npm run watch\" \"npm run start\"",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix"
}
```

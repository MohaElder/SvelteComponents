# use-svelte-anywhere

Build your web component for any frameworks with svelte

## What is this?

use-svelte-anywhere is a project that started from a story I was working on during work. We want to slowly transition the project from Angular js to svelte, and we decided to do that with creating web components with svelte and use them in Angular js. The project includes a workflow that we are using to build web components and bundle them into the larger project. It contains configuration files and templates that allows you to easily build upon and create your own web component for any frameworks.

**In a short, this project shows you how to build universal web components with svelte using its [client side component api](https://svelte.dev/docs#run-time-client-side-component-api).**

## What can a svelte component do with this client side component api?

Just like how every components in React is a javascript function. Svelte with Client Side Component api lives as a JavaScript class. You can initialize its instance and control it like how you control an object. **And not only you can do it in svelte, you can do it with any web frameworks once you built it**

## Why would I use svelte to build a web component?

The performance features of svelte makes it perfect to build standalone web components. Once you have bundled the component, you just need to import the output file on client side. No extra settings and imports will be needed and the component works super fast. Besides, it feels really good to write svelte :)

## How would this project help me to build web component with svelte?

Although svelte is perfect for building web components, it took me(and my colleagues) quite some pain to set up everything. In addition, if you need to use it in some legacy frameworks or pure vanilla js, there is some tricks you need to put with building config. We have stepped onto countless miseries trying to figure out how to build a working svelte component that can be used on Angular JS 3(Yes! We are using Angular JS 3) This project allows you to:

1. Write ES6 code, run on ES5 projects
2. Support Internet Explorer 9
3. Optimized code size
4. A Svelte playground to test your code with the svelte goodies
5. An Angular js playground to see if your code works on AngularJs 1.8
6. A plain js project to see if your code works on plain javascript
7. A working svelte component that you can use as a template

## Project structure

```
use-svelte-anywhere
|
|--app //playgrounds
|--package
    |--src
    |--lib //store all components
    |--routes~~
        |--+page.svelte //svelte playground
    |--main.js //entrypoint that vite.config.js uses to build the components
    |--vite.config.js
    |--package.json
      
```

## Developing

```bash
cd package/SvelteComponents
npm install #or pnpm install

#Svelte Playground
npm run dev -- --open

#Angular js Playground
explorer.exe ../../app/index.html #or open ../../app/index.html if you are on Mac or Linux
Then just double click to open the file like how you started learning web development for the first time!

```

## Building

1. Go to `vite.config.js` and set `outDir`
2. Run:
```bash
npm run build
```
4. Get bundle.js and place in the desired location of your project or publish it as a library

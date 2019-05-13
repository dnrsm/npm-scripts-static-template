# npm-scripts static template

## Features
|Features|Description|
|------------------|-----------|
|CSS| [SASS](http://sass-lang.com/),[PostCSS](https://postcss.org/)|
|JS|[Vue.js](https://jp.vuejs.org/index.html),[TypeScript](https://www.typescriptlang.org/),[Webpack](https://webpack.js.org/), [Babel](http://babeljs.io/), [Prettier](https://prettier.io/)|
|Testing|[Jest](https://jestjs.io/), [Puppeteer](https://pptr.dev/)|
|Live Reload|[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)|

## Installation
```bash
$ npm i
$ npm install -g backstopjs
$ backstop init
```

## Usage
```bash
# run postcss
$ npm run postcss

# build js
$ npm run build:js

# build ejs
$ npm run build:ejs

# build sass
$ npm run build:sass

# Minify images
$ npm run build:images

# build src files
$ npm run build

# format sass
$ npm run format:css

# list js
$ npm run lint

# listfinx js
$ npm run listfinx

# dev
$ npm run dev

# e2e testing
$ npm run test:e2e

# unit testing
$ npm run test:unit

# create reference files
$ reference:visual

# visual regression testing
$ test:visual

# update reference files
$ approve:visual
```

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![devDependency Status](https://david-dm.org/thiamsantos/boilerplate/dev-status.svg)](https://david-dm.org/thiamsantos/boilerplate#info=devDependencies)

# Boilerplate
This project uses:

[ITCSS](http://itcss.io/) + [BEM](http://getbem.com/) + [Stylus](http://stylus-lang.com/) = :heart:

[ES6](http://www.ecma-international.org/ecma-262/6.0/) + [rollup](http://rollupjs.org/) + [Babel](http://babeljs.io/) = :heart:

## NPM scripts
It uses npm scripts as build tool.

For know why npm and not [gulp](http://gulpjs.com/), [grunt](http://gruntjs.com/) or [brocoli](http://broccolijs.com/) see:
- [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)
- [Why we should stop using Grunt & Gulp](https://www.keithcirkel.co.uk/why-we-should-stop-using-grunt/)
- [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.2kksm6vo8)

## Getting Started
### Installation
First of all, install the dependencies to run this boilerplate.
- [NodeJS](https://nodejs.org/en/)

```sh
# Clone this repository
$ git clone https://github.com/thiamsantos/boilerplate.git
$ cd boilerplate

# install dependencies
$ npm install
```

### Commands
With the commands above, you have everything to start.

#### Build
- Build All: `npm run build`
- Build JavaScript: `npm run build:js`
- Build Stylus: `npm run build:styl`
- Build Images: `npm run build:img`

#### Server
- Local server on localhost:3000 with automatically reload: `npm run serve`

#### Watch files and build
- Watch All and initialize server: `npm run watch`
- Watch Images: `npm run watch:img`
- Watch Javascript: `npm run watch:js`
- Watch Stylus: `npm run watch:styl`

#### Lint
- Lint: `npm run lint`
- Lint JavaScript: `npm run lint:js`
- Lint Stylus: `npm run lint:styl`

### Files Structure
```sh
├── .babelrc
├── .editorconfig
├── .gitignore
├── .stylintrc
├── index.html
├── LICENSE.md
├── package.json
├── README.md
├── rollup.config.js
└── src
    ├── img
    |   └── example-jpeg.jpg
    |   └── example-png.png
    |   └── example-svg.svg
    ├── js
    |   ├── components
    |   |   └── foo.js
    |   ├── vendor
    |   |   └── bar.js
    |   └── main.js
    └── styl
        ├── base
        |   └── global.styl
        |   └── typography.styl
        ├── components
        |   └── button.styl
        ├── generic
        |   └── reset.styl
        ├── objects
        |   └── container.styl
        ├── settings
        |   └── colors.styl
        |   └── variables.styl
        ├── tools
        |   └── mixins.styl
        └── main.js
```

## Plugins and Tools
Plugins that this project implements.

### Styles
For build styles it uses [Stylus](http://stylus-lang.com/) along with:
- [rupture](http://jescalan.github.io/rupture/) for responsive utilities
- [poststylus](https://github.com/seaneking/poststylus) for adapte any [PostCSS](http://postcss.org/) plugin with stylus
- [autoprefixer](https://github.com/postcss/autoprefixer) for vendor prefixes
- [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) for combine CSS media query rules and add to the end of the file

### Scripts
For build scripts it uses [rollup](http://rollupjs.org/) as module bundler along with:
- [babel](https://babeljs.io/) for transpile [ES6](http://www.ecma-international.org/ecma-262/6.0/) code
- [uglify](https://github.com/mishoo/UglifyJS) for minify the code

### Images
For minify images it uses [imagemin](https://github.com/imagemin/imagemin) along with:
- [jpeg-recompress](https://github.com/imagemin/imagemin-jpeg-recompress), [jpegoptim](https://github.com/imagemin/imagemin-jpegoptim), [mozjpeg](https://github.com/imagemin/imagemin-mozjpeg) for compress JPEG files
- [optipng](https://github.com/imagemin/imagemin-optipng), [pngquant](https://github.com/imagemin/imagemin-pngquant), [zopfli](https://github.com/imagemin/imagemin-zopfli) for compress PNG files
- [svgo](https://github.com/imagemin/imagemin-svgo) for compress svg files

### Server
For local server with automatically reload it uses [browsersync](https://www.browsersync.io/).

### Lint
For precommit and prepush lint it uses husky along with:
- [xo](https://github.com/sindresorhus/xo) for lint javascript code
- [stylint](https://www.npmjs.com/package/stylint) for lint stylus code

## License
[MIT License](https://opensource.org/licenses/MIT) &copy; Thiago Santos

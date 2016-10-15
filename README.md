<p align="center">
  <img src="https://github.com/thiamsantos/borg-boilerplate/raw/master/logo-borg.jpg" width="200" alt="borg">
</p>

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![devDependency Status](https://david-dm.org/thiamsantos/boilerplate/dev-status.svg)](https://david-dm.org/thiamsantos/boilerplate#info=devDependencies)

# Borg boilerplate
> We are the Borg. Resistance is futile.

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
$ git clone https://github.com/thiamsantos/borg-boilerplate.git
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

#### Test
- Unit tests: `npm test`
- Coverage tests: `npm run test:coverage`

#### Server
- Local server on localhost:3000 with automatically reload: `npm run serve`

#### Reporter
- CSS complexity reporter: `npm run reporter:css`

#### Watch files and build
- Watch All and initialize server: `npm run watch`
- Watch tests: `npm run watch:test`
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
├── dist
|   ├── css
|   |   └── main.css
|   ├── img
|   |   └── example-jpeg.jpg
|   |   └── example-png.png
|   |   └── example-svg.svg
|   └── js
|       └── main.js
├── src
|   ├── img
|   |   └── example-jpeg.jpg
|   |   └── example-png.png
|   |   └── example-svg.svg
|   ├── js
|   |   ├── components
|   |   |   └── foo.js
|   |   ├── vendor
|   |   |   └── bar.js
|   |   └── main.js
|   └── styl
|       ├── base
|       |   └── global.styl
|       |   └── typography.styl
|       ├── components
|       |   └── button.styl
|       ├── generic
|       |   └── reset.styl
|       ├── objects
|       |   └── container.styl
|       ├── settings
|       |   └── colors.styl
|       |   └── variables.styl
|       ├── tools
|       |   └── mixins.styl
|       └── main.js
└── test
    └── foo.js
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

### Test
For Unit tests it uses [ava](https://github.com/avajs/ava) along with:
- [browser-env](https://github.com/lukechilds/browser-env) for [browser testing](https://github.com/avajs/ava/blob/master/docs/recipes/browser-testing.md)
- [nyc](https://github.com/istanbuljs/nyc) for code coverage

### Reporter css
For css complexity report it uses [parker](https://github.com/katiefenn/parker)

### Lint
For precommit and prepush lint it uses husky along with:
- [xo](https://github.com/sindresorhus/xo) for lint javascript code
- [stylint](https://www.npmjs.com/package/stylint) for lint stylus code

#### Rules enforced on javascript code
It's enforced almost every that [xo comes by default](https://github.com/sindresorhus/xo). The only rules overriden are:

##### Semicolons
Only use semicolons when [strictly necessary](http://standardjs.com/rules.html#semicolons).

##### Indentation
Ident using 2 spaces.

#### Rules enforced on stylus code
##### Brackets
Never use brackets when declaring selectors.

:heavy_check_mark: Good
```stylus
.good
  display block
  padding 10em
```

:x: Bad
```stylus
.bad {
  display block
  padding 10em
}
```

##### Colons
Never use colons.

:heavy_check_mark: Good
```stylus
.good
  display block
  padding 10em
```

:x: Bad
```stylus
.bad
  display: block
  padding: 10em
```

##### Colors
Always use colors inside variables.

:heavy_check_mark: Good
```stylus
$primary-color = #000

.good
  color $primary-color
  display block
```

:x: Bad
```stylus
.bad
  color #000
  display block
```

##### Comment Space
Always put a space after line comments.

:heavy_check_mark: Good
```stylus
// Good comment
```

:x: Bad
```stylus
//Bad comment
```

##### Depth Limit
Never indent selectors more than 3 times. Pseudo selectors like &:first-child or &:hover won't count towards the limit.

:heavy_check_mark: Good
```stylus
.list
  // some properties

  &__item
    // some properties

    &--highlighted
      // some properties
```

:x: Bad
```stylus
.list
  // some properties

  &__item
    // some properties

    &__media
      // some properties

      &--highlighted
        // some properties
```

##### Extends
Always extend a placeholder using `@extends` instead of ``@extend`.

:heavy_check_mark: Good
```stylus
.good
  @extends $some-placeholder
```

:x: Bad
```stylus
.bad
  @extend $some-placeholder
```

##### Indentation

:heavy_check_mark: Good
```stylus
.good
  display block
  padding 10em
```

:x: Bad
```stylus
.good
    display block
    padding 10em
```

##### Leading Zero
Never use unnecessary leading zeroes on decimal points.

:heavy_check_mark: Good
```stylus
$primary-color = rgba(0,0,0,.87)
```

:x: Bad
```stylus
$primary-color = rgba(0,0,0,0.87)
```

##### None Value
Always use `0` instead of `none`.

:heavy_check_mark: Good
```stylus
.good
  border 0
```

:x: Bad
```stylus
.bad
  border none
```

##### Paren Space
Never use extra spaces inside parens.

:heavy_check_mark: Good
```stylus
my-mixin($my-param)
```

:x: Bad
```stylus
my-mixin( $my-param )
```

##### Placeholders
Always extend placeholders vars.

:heavy_check_mark: Good
```stylus
.good
  @extends $placeholder
```

:x: Bad
```stylus
.bad
  @extends .some-class
```

##### Quotes
Always use single quotes.

:heavy_check_mark: Good
```stylus
.good
  font-family 'Roboto', sans-serif
```

:x: Bad
```stylus
.bad
  font-family "Roboto", sans-serif
```

##### Semicolons
Never use semicolons.

:heavy_check_mark: Good
```stylus
.good
  display block
  padding 10em
```

:x: Bad
```stylus
.bad
  display block;
  padding 10em;
```

##### Property Order
Sort properties in alphabetical order.

:heavy_check_mark: Good
```stylus
.good
  display block
  left 0
  position relative
  text-align center
  top 0
```

:x: Bad
```stylus
.bad
  position relative
  top 0
  left 0
  text-align center
  display block
```

##### Stacked Properties
Always put properties on new lines.

:heavy_check_mark: Good
```stylus
.good
  display block
```

:x: Bad
```stylus
.bad {display: block}
```

##### Variables
Always name a variable with the lowercase-dash convention and prefix it with
a dollar.

:heavy_check_mark: Good
```stylus
$gutter-width = 10em
$cols-number = 12
```

:x: Bad
```stylus
$gutterWidth = 10em
cols-number = 12
```

##### Zero Units
Never use units after `0` values.

:heavy_check_mark: Good
```stylus
.good
  margin 0
```

:x: Bad
```stylus
.bad
  margin 0px
```


## License
[MIT License](https://opensource.org/licenses/MIT) &copy; Thiago Santos

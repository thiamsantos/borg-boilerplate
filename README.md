<img src="https://cdn.rawgit.com/thiamsantos/borg-boilerplate/master/logo-borg.jpg" width="200" alt="borg" align="right">

# Borg boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/thiamsantos/borg-boilerplate.svg)](https://greenkeeper.io/)
> We are the Borg. Resistance is futile.

This project uses [ES6](http://www.ecma-international.org/ecma-262/6.0/), [Stylus](http://stylus-lang.com/), [rollup](http://rollupjs.org/), [Pug](https://github.com/pugjs/pug), [NPM Scripts](https://docs.npmjs.com/misc/scripts) and [tape](https://github.com/substack/tape).

## Table of contents

- [Getting Started](#getting-started)
- [Tasks](#tasks)
- [Plugins and Tools](#plugins-and-tools)
- [Code Standards](#code-standards)
- [Folders and Files](#folders-and-files)
- [Contribute](#contribute)
- [Credits](#credits)
- [License](#license)

## Getting Started
### Installation
First of all, install the dependencies to run this boilerplate.
- [NodeJS](https://nodejs.org/en/)

```sh
# Clone this repository
$ git clone https://github.com/thiamsantos/borg-boilerplate.git your-project
$ cd your-project

# Install dependencies
$ npm install

# Create dist folders
$ npm run build:folders
```

## Tasks
With the commands above, you have everything to start.

### Build
- `npm run build`: Build All
- `npm run build:folders`: Create dist folders
- `npm run build:static`: Build static files
- `npm run build:js`: Build JavaScript
- `npm run build:styl`: Build Stylus
- `npm run build:img`: Build Images
- `npm run build:pug`: Build Pug

### Watch files and build
- `npm run watch`: Watch All and initialize server
- `npm run watch:test`: Watch tests
- `npm run watch:img`: Watch Images
- `npm run watch:js`: Watch Javascript
- `npm run watch:styl`: Watch Stylus
- `npm run watch:pug`: Watch Pug

### Lint
- `npm run lint`: Lint
- `npm run lint:js`: Lint JavaScript
- `npm run lint:styl`: Lint Stylus
- `npm run lint:pug`: Lint Pug

### Test
- `npm test`: Unit tests
- `npm run coverage`: Coverage tests

### Server
- `npm run serve`: Local server on localhost:3000 with automatically reload

### Reporter
- `npm run reporter:css`: CSS complexity reporter

## Plugins and Tools
Plugins that this boilerplate implements.

### CSS
For build CSS it uses [Stylus](http://stylus-lang.com/) as pre-processor along with:
- [rupture](http://jescalan.github.io/rupture/) for responsive utilities
- [poststylus](https://github.com/seaneking/poststylus) for adapte any [PostCSS](http://postcss.org/) plugin with stylus
- [autoprefixer](https://github.com/postcss/autoprefixer) for vendor prefixes
- [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) for combine CSS media query rules and add to the end of the file

### JavaScript
For build JavaScript it uses [rollup](http://rollupjs.org/) as module bundler along with:
- [babel](https://babeljs.io/) for transpile [ES6](http://www.ecma-international.org/ecma-262/6.0/) code
- [uglify](https://github.com/mishoo/UglifyJS) for minify the code

### Test
For Unit tests it uses [tape](https://github.com/substack/tape) as test-runner along with:
- [browser-env](https://github.com/lukechilds/browser-env) for [browser testing](https://github.com/avajs/ava/blob/master/docs/recipes/browser-testing.md#enjoy)
- [nyc](https://github.com/istanbuljs/nyc) for code coverage
- [tap-diff](https://github.com/axross/tap-diff) for beautiful reporters

### Images
For minify images it uses [imagemin](https://github.com/imagemin/imagemin) along with:
- [jpeg-recompress](https://github.com/imagemin/imagemin-jpeg-recompress), [jpegoptim](https://github.com/imagemin/imagemin-jpegoptim), [mozjpeg](https://github.com/imagemin/imagemin-mozjpeg) for compress JPEG files
- [optipng](https://github.com/imagemin/imagemin-optipng), [pngquant](https://github.com/imagemin/imagemin-pngquant), [zopfli](https://github.com/imagemin/imagemin-zopfli) for compress PNG files
- [svgo](https://github.com/imagemin/imagemin-svgo) for compress svg files

### Server
For local server with automatically reload it uses [browsersync](https://www.browsersync.io/).

### Reporter css
For css complexity report it uses [parker](https://github.com/katiefenn/parker)

### Lint
For precommit and prepush lint it uses [husky](https://github.com/typicode/husky) along with:
- [xo](https://github.com/sindresorhus/xo) for lint javascript code
- [stylint](https://www.npmjs.com/package/stylint) for lint stylus code
- [pug-lint](https://github.com/pugjs/pug-lint) for lint pug code

## Code Standards

### JavaScript
It's enforced almost every that [xo comes by default](https://github.com/sindresorhus/xo). The only rules overriden are:

- Semicolons: Only use semicolons when [strictly necessary](http://standardjs.com/rules.html#semicolons).
- Indentation: Indent using 2 spaces.

### Stylus
Follow my own [stylus code style](https://github.com/thiamsantos/stylus-code-style).

### Pug
Follow my own [pug code style](https://github.com/thiamsantos/pug-code-style).

## Folders and Files
```sh
├── .editorconfig
├── .gitignore
├── .puglintrc
├── .stylintrc
├── LICENSE.md
├── package.json
├── README.md
├── rollup.config.js
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
|   ├── pug
|   |   └── data.js
|   |   └── index.pug
|   ├── static
|   |   └── favicon.ico
|   |   └── robots.txt
|   |   └── sitemap.xml
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

Those folders and files will change during the project.

## Contribute

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

**After your pull request is merged**, you can safely delete your branch.

## Credits
This boilerplate was inspired by the incredible [Kratos Boilerplate](https://github.com/LFeh/kratos-boilerplate) and [Qualy Boilerplate](https://github.com/Qualy-org/qualy-front).

## License
[MIT License](LICENSE.md) &copy; [Thiago Santos](https://thiamsantos.github.io/)

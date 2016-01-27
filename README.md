# gulp-template
A boilerplate for [gulp](http://gulpjs.com/) with HTML5 and [MaterializeCSS](http://materializecss.com/). It include [browsersync](https://www.browsersync.io/) module so a server is iniciated at http://localhost:3000 with automatic reload.

## How to use
To use it, you first need to have [nodejs](https://nodejs.org/en/) installed.
Next that you must install the dependencies.
Than just start the gulp e be happy.

Run:
```
npm install
gulp
```
### Using gulp-include

gulp-include uses directives similar to sprockets or snockets. A directive is a comment in your files that gulp-include recognizes as a command.

For more information checkout the [page](https://www.npmjs.com/package/gulp-include).

### Using gulp-csscss
gulp-csscss will parse any CSS files you give it and let you know which rulesets have duplicated declarations. But for use with gulp you will need [ruby](https://www.ruby-lang.org/en/) installed and to install the csscss gem run ´gem install csscss´ command.

Fore more information checkout the page of the [project](https://zmoazeni.github.io/csscss/).

#### Modules used

* [gulp](http://gulpjs.com/)
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [gulp-watch](https://www.npmjs.com/package/gulp-watch)
* [gulp-include](https://www.npmjs.com/package/gulp-include)
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant)
* [browser-sync](https://www.npmjs.com/package/browser-sync)
* [gulp-csscss](https://www.npmjs.com/package/gulp-csscss)
* [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
* [gulp-util](https://www.npmjs.com/package/gulp-util)

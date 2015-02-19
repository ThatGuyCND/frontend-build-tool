# Let's Build a Front End Builder

![Yo Dwg, I heard you like generators](http://furzeface.com/_assets/images/blog/yo_dawg_generators.jpg)

## Step 1: Installation Requirements
> "... cut a hole in a box ..."

* :gem: Ruby Environment Manager
```bash
$ brew install rbenv ruby-build
```
* :beer: Homebrew
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
* :mega: Node
```bash
brew install node
```
* :coffee: Gulp
```bash
npm install -g gulp    # Installed as a global CLI tool
```
* :bird: Bower
```bash
npm install -g bower    # Installed as a global CLI tool
```

## Step 2: Install all the things
> "... put your junk in that box ..."

Local Node Modules:
 * [Gulp](http://gulpjs.com/) because we need it locally too `npm install --save-dev gulp`

Other modules for things we want to do:
  * Compile our Sass files
    * [Gulp Ruby Sass](https://www.npmjs.com/package/gulp-ruby-sass) `=> $ npm install --save-dev gulp-ruby-sass`
  * Prefix our style properties, for those browsers that we dare not mention
    * [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) `=> $ npm install --save-dev gulp-autoprefixer`
  * Concat multiple files into one
    * [Gulp Concat](https://github.com/wearefractal/gulp-concat) `=> $ npm install --save-dev gulp-concat`

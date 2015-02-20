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

First, in order to save these dependencies w/o committing each node module, we need to create a `package.json` file that will house all of the information about the _thing_ that we're building. We can use Node's built in initializing tool to handle all the basic information. We do this by executing `npm init` and answering the prompts.

```shell
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See "npm help json" for definitive documentation on these fields
and exactly what they do.

Use "npm install <pkg> --save" afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

name: (Front End) frontend-build-tool
version: (1.0.0) 0.0.1
description: Does everything we want to automate for my frontend build process.
entry point: (index.js) gulpfile.js
test command:
git repository: https://github.com/ThatGuyCND/frontend-build-tool
keywords: gulp automation, frontend, sass
author: Erik Baldwin <erik.baldwin@acquia.com
license: (ISC) MIT
```

results in a package.json file in the root of our cwd:

```json
{
  "name": "frontend-build-tool",
  "version": "0.0.1",
  "description": "Does everything we want to automate for my frontend build process.",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ThatGuyCND/frontend-build-tool"
  },
  "keywords": [
    "gulp",
    "automation",
    "frontend",
    "sass"
  ],
  "author": "Erik Baldwin <erik.baldwin@acquia.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ThatGuyCND/frontend-build-tool/issues"
  },
  "homepage": "https://github.com/ThatGuyCND/frontend-build-tool"
}
```

Having the package file means that we don't have to include `./node_modules` in our code repository, making it easier to share. When someone else wants to use this tool, the would simply checkout the repository and run `npm install` in the root; all specified package dependencies will be downloaded. The only thing we'll manually update for the time being is the test key - we don't want to fail our build just because we didn't specify a test. Change the following: `"test": "echo \"Error: no test specified\" && exit 1"` => `"test": "echo \"Warning: no test specified\" && exit 0"`

Local Node Modules:
 * [Gulp](http://gulpjs.com/) because we need it locally too `npm install --save-dev gulp`

Other modules for things we want to do:
  * Compile our Sass files
    * [Gulp Ruby Sass](https://www.npmjs.com/package/gulp-ruby-sass) `=> $ npm install --save-dev gulp-ruby-sass`
  * Prefix our style properties, for those browsers that we dare not mention
    * [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) `=> $ npm install --save-dev gulp-autoprefixer`
  * Concat multiple files into one
    * [Gulp Concat](https://github.com/wearefractal/gulp-concat) `=> $ npm install --save-dev gulp-concat`

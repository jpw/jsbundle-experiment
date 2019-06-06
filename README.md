# jsbundle-experiment

A little demo of bundling JS from a variety of sources for consumption by ES5 &amp; ES6 clients. Based on my [rollup & bundling demo](https://github.com/jpw/testing-rollup).

## Aims

1. We want to include 3rd party JS for the browser from npm: _accomplished via rollup using 'rollup-plugin-node-resolve', enabling use of node-style_ require _statements_
1. We want to include many granular FE packages of CSS, JS, templates & images from our main package repo.
1. We want to *watch* source directories: _accomplished via rollup's_ watch _CLI option_


## To use

1. Clone this repo, `cd` into it.
1. if you have `nvm` installed, run `nvm use` then `npm ci` else `npm i`
1. Build the JS & CSS assets: `npm run build-all`
1. Run the express server: `node app`
1. [Look at `http://localhost:3000/`](http://localhost:3000/)

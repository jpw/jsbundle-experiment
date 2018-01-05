# jsbundle-experiment

A little demo of bundling JS from a variety of sources for consumption by ES5 &amp; ES6 clients. Based on my [rollup & bundling demo](https://github.com/jpw/testing-rollup).

## Aims

1. We want to include 3rd party JS for the browser from npm: _accomplished via rollup using 'rollup-plugin-node-resolve', enabling use of node-style_ require _statements_
1. We want to include many granular FE packages of CSS, JS, templates & images from our main package repo.
1. We want to *watch* source directories: _accomplished via rollup's_ watch _CLI option_


## to use TODO check me

Clone this repo, then: `npm i`

Build the assets: `npm run build-js`

Run the express server: `node app`

[Look at `http://localhost:3000/`](http://localhost:3000/)
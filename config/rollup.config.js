// enables rollup to do node-style 'resolve' of JS modules
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'resources/main.js',
  output: {
    file: 'public/js/bundle-es6.js',
    format: 'es'
  },
  plugins: [
  	resolve()
  ]
};

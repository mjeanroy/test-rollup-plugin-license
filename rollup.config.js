const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const license = require('rollup-plugin-license');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  dest: path.join(__dirname, 'src', 'bundle.js'),
  format: 'iife',
  sourceMap: false,
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),

    commonjs({
      ignoreGlobal: false,  // Default: false
      sourceMap: false,  // Default: true
    }),

    license({
      thirdParty: {
        output: path.join(__dirname, 'dependencies.txt'),
      },
    }),
  ],
};

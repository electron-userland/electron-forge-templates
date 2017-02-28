const path = require('path');

module.exports = {
  dependencies: [
    'electron-devtools-installer@^2.0.1',
    'react@^15.4.1',
    'react-dom@^15.4.1',
    'react-hot-loader@^3.0.0-beta.6',
  ],
  devDependencies: [
    'babel-plugin-transform-es2015-classes'
  ],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    // Do nothing
  },
};
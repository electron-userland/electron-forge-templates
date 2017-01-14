const path = require('path');

module.exports = {
  dependencies: [
    'electron-devtools-installer@^2.0.1',
    'react@^15.4.1',
    'react-dom@^15.4.1'
  ],
  devDependencies: [],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    // Do nothing
  },
};
const path = require('path');

module.exports = {
  dependencies: [
    'react@^15.4.1',
    'react-dom@^15.4.1'
  ],
  devDependencies: [
    'electron-devtools-installer@^2.0.1'
  ],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    // Do nothing
  },
};
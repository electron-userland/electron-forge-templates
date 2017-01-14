const path = require('path');

module.exports = {
  dependencies: [
    'electron-devtools-installer@^2.0.1',
    'vue@^2.1.7'
  ],
  devDependencies: [],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    // Do nothing
  },
};
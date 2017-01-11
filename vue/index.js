const path = require('path');

module.exports = {
  dependencies: [
    'vue@^2.1.7'
  ],
  devDependencies: [
    'electron-devtools-installer@^2.0.1'
  ],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    // Do nothing
  },
};
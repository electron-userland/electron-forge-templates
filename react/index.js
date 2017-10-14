const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: [
    'electron-devtools-installer@^2.1.0',
    'react@^15.4.1',
    'react-dom@^15.4.1',
    'react-hot-loader@^3.0.0-beta.6',
  ],
  devDependencies: [
    'babel-plugin-transform-es2015-classes',
    'eslint@^3',
    'eslint-config-airbnb@^15',
    'eslint-plugin-import@^2',
    'eslint-plugin-jsx-a11y@^5',
    'eslint-plugin-react@^7'
  ],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    const packageJSONPath = path.resolve(initDir, 'package.json');
    const packageJSON = require(packageJSONPath);
    const gitignorePath = path.resolve(initDir, '.gitignore')
    packageJSON.main = 'src/index.js';
    packageJSON.scripts.lint = 'eslint --cache --color --ext .jsx,.js src';
    fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));
    fs.appendFileSync(gitignorePath, `.eslintcache`);
  },
};
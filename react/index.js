const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: [
    'electron-devtools-installer@^2.1.0',
    'react@^16.3.2',
    'react-dom@^16.3.2',
    'react-hot-loader@^4.1.2',
  ],
  devDependencies: [
    'babel-plugin-transform-es2015-classes',
    'eslint@^4',
    'eslint-config-airbnb@^16',
    'eslint-plugin-import@^2',
    'eslint-plugin-jsx-a11y@^6',
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

const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: [
    'angular@^1.7.0',
    'electron-devtools-installer@^2.1.0',
  ],
  devDependencies: [
    'eslint@^3',
    'eslint-plugin-angular@^3',
    'eslint-plugin-import@^2'
  ],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: initDir => {
    const packageJSONPath = path.resolve(initDir, 'package.json');
    const packageJSON = require(packageJSONPath);
    const gitignorePath = path.resolve(initDir, '.gitignore')
    packageJSON.main = 'src/index.js';
    packageJSON.scripts.lint = 'npx eslint --cache --color --ext .js src';
    fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));
    fs.appendFileSync(gitignorePath, `.eslintcache`);
  }
};

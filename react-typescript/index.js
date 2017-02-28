const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: [
    'react@^15.4.1',
    'react-dom@^15.4.1',
    '@types/electron@^1.4.30',
    '@types/react@^0.14.55',
    '@types/react-dom@^0.14.20',
    "@types/electron-devtools-installer@^2.0.2",
    'electron-devtools-installer@^2.0.1',
    'tslib@^1.4.0'
  ],
  devDependencies: [
    'tslint@^4.2.0',
    'typescript@~2.1.4'
  ],
  templateDirectory: path.resolve(__dirname, './tmpl'),
  postCopy: (initDir, ora, lintStyle) => {
    const oldIndex = path.resolve(initDir, 'src', 'index.js');
    if (fs.existsSync(oldIndex)) fs.unlinkSync(oldIndex);
    const packageJSON = require(path.resolve(initDir, 'package.json'));
    packageJSON.main = 'src/index.ts';
    packageJSON.scripts.lint = 'tslint src';
    fs.writeFileSync(path.resolve(initDir, 'package.json'), JSON.stringify(packageJSON, null, 2));
  },
};

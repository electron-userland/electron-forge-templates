const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: [
    '@angular/common@^2.4.1',
    '@angular/compiler@^2.4.1',
    '@angular/core@^2.4.1',
    '@angular/platform-browser@^2.4.1',
    '@angular/platform-browser-dynamic@^2.4.1',
    '@types/electron@^1.4.30',
    'electron-devtools-installer@^2.0.1',
    'reflect-metadata@^0.1.9',
    'tslib@^1.4.0',
    'zone.js@^0.7.4'
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
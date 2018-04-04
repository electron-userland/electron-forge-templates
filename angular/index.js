const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: [
    '@angular/common@^5.2.9',
    '@angular/compiler@^5.2.9',
    '@angular/core@^5.2.9',
    '@angular/platform-browser@^5.2.9',
    '@angular/platform-browser-dynamic@^5.2.9',
    'electron-devtools-installer@^2.2.0',
    'reflect-metadata@^0.1.10',
    'tslib@^1.7.1',
    'zone.js@^0.8.16'
  ],
  devDependencies: [
    'tslint@^5.9.1',
    'typescript@^2.4.2'
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

'use strict'

const fs = require('fs-extra')
const path = require('path')

module.exports = {
  devDependencies: ['@electron-forge/plugin-webpack'],
  templateDirectory: path.resolve(__dirname, 'tmpl'),
  postCopy: initDir => {
    const packageJSONPath = path.join(initDir, 'package.json')
    return fs.readJson(packageJSONPath)
      .then(packageJSON => {
        packageJSON.main = './.webpack/main'
        packageJSON.config.forge.plugins = [[
          '@electron-forge/plugin-webpack',
          {
            mainConfig: "./webpack.main.config.js",
            renderer: {
              config: "./webpack.renderer.config.js",
              entryPoints: [
                {
                  html: "./src/index.html",
                  js: "./src/renderer.js",
                  preload: {
                    js: "./src/preload.js",
                  },
                  name: "main_window"
                }
              ]
            }
          }
        ]]
        return fs.writeJson(packageJSONPath, packageJSON, { spaces: 2 })
      })
  }
}

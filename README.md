## Electron Forge Templates

This repo helps you to get started with many of the popular web frameworks in Electron, by providing a ready-to-go templates for [electron-forge](https://github.com/electron-userland/electron-forge/).

## How do I try these out?

All of these templates are **built-in** to `electron-forge`.  All you have to do is install forge, initialize your project and get coding!

```sh
npm install -g electron-forge

# react can be swapped out for any of the template names
electron-forge init my-project --template=react
```

To create an installable package that you can send to people, run:

```sh
electron-forge make
```

## Is it really this easy though?

Yes!

## Frameworks supported

* Vue 2.0
* React
* React with TypeScript support
* Angular >= 4.0

## Unsupported frameworks

* Ember (use [ember-electron](https://github.com/felixrieseberg/ember-electron), which depends on Electron Forge)

## [Third party templates](https://github.com/electron-userland/electron-forge-templates/wiki/Third-Party-Templates)

## Coming soon

* Angular 1.x ([help wanted](https://github.com/electron-userland/electron-forge-templates/issues/3))

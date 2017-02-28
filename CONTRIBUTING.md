# Contributing to Electron Forge templates

Electron Forge is a community-driven project. As such, we welcome and encourage all sorts of
contributions. They include, but are not limited to:

* Constructive feedback
* [Questions about usage](#questions-about-usage)
* [Bug reports / technical issues](#before-opening-bug-reportstechnical-issues)
* Documentation changes
* Feature requests
* [Pull requests](#filing-pull-requests)

We strongly suggest that before filing an issue, you search through the existing issues to see
if it has already been filed by someone else.

This project is a part of the Electron ecosystem. As such, all contributions to this project follow
[Electron's code of conduct](https://github.com/electron/electron/blob/master/CODE_OF_CONDUCT.md)
where appropriate.

## Questions about usage

If you have questions about usage, we encourage you to visit one of the several [community-driven
sites](https://github.com/electron/electron#community).

## Before opening bug reports/technical issues

### Debugging

One way to troubleshoot potential problems is to set the `DEBUG` environment variable before
running `electron-forge`. This will print debug information from the specified modules. The
value of the environment variable is a comma-separated list of modules which support this logging
feature. For this project, the value that is most relevant is `electron-forge:*`.

We use the [`debug`](https://www.npmjs.com/package/debug#usage) module for this functionality. It
has examples on how to set environment variables if you don't know how.

**If you are using `npm run` to execute `electron-forge`, run the `electron-forge` command
without using `npm run` and make a note of the output, because `npm run` does not print out error
messages when a script errors.**

## Contribution suggestions

We use the label [`help wanted`](https://github.com/electron-userland/electron-forge-templates/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)
in the issue tracker to denote fairly-well-scoped-out bugs or feature requests that the community
can pick up and work on. If any of those labeled issues do not have enough information, please feel
free to ask constructive questions. (This applies to any open issue.)

## Filing Pull Requests

Here are some things to keep in mind as you file pull requests to fix bugs, add new features, etc.:

* Travis CI is used to make sure that the project creates apps from all templates as expected on the
  supported platforms, using supported Node.js versions, and that the template conforms to the
  configured coding standards.
* One of the philosophies of the project is to keep the templates as minimal as possible. If you are
  adding a new feature, think about whether it is appropriate to go into a separate, third party
  template, which can also be installed via `electron-forge init`.
* Please **do not** bump version numbers in your pull requests, the maintainers will do that.
  Feel free to indicate whether the changes require a major, minor, or patch version bump, as
  prescribed by the [semantic versioning specification](http://semver.org/).
* If you are continuing the work of another person's PR and need to rebase/squash, please retain the
  attribution of the original author(s) and continue the work in subsequent commits.

### Release process

* If you aren't sure if a release should happen, open an issue.
* Make sure the tests pass.

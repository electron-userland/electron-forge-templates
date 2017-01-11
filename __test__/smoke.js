const forge = require('electron-forge');
const fs = require('fs');
const os = require('os');
const path = require('path');
const rimraf = require('rimraf');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const modules = fs.readdirSync(root)
  .filter(m => ['__test__', 'node_modules'].indexOf(m) === -1 && !m.startsWith('.') && fs.statSync(path.resolve(root, m)).isDirectory())
  .map(m => path.resolve(root, m));

modules.forEach((module) => {
    describe(`${path.basename(module)} template`, () => {
        let dir;

        before(() => {
            execSync('npm link', {
                cwd: module,
            });
            dir = path.resolve(os.tmpdir(), `${Date.now()}`);
        });

        it('should initialize', () =>
            forge.init({
                dir,
                interactive: false,
                template: path.basename(module),
            })
        );

        after(() => {
            execSync('npm unlink', {
                cwd: module,
            });
            rimraf.sync(dir);
        });
    });
});
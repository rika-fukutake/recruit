const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const glob = require('glob');
const makeDir = require('make-dir');
const env = require('./env');

const srcPath = env.srcPath;
const distDir = env.distPath;
const ejsPath = `${srcPath}/ejs`;
const rootPath = env.rootPath;

const jsonDataPath = `${srcPath}/assets/data/data.json`;
const jsonData = JSON.parse(fs.readFileSync(jsonDataPath, 'utf-8'));
const data = {
  rootPath,
  pages: jsonData
};

glob(
  '**/*.ejs',
  {
    cwd: ejsPath,
    ignore: '**/_*.ejs',
  },
  (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    for (let fileName of files) {
      convert(fileName, ejsPath, distDir);
    }
  }
);

const convert = (fileName, ejsPath, distDir) => {
  ejs.renderFile(path.resolve(ejsPath, fileName), { data }, (err, str) => {
    if (err) {
      console.log(err);
      return;
    }

    const distPath = path.resolve(distDir, fileName);
    makeDir(path.dirname(distPath)).then(() => {
      const htmlPath = path.format({
          dir: path.dirname(distPath),
          name: path.basename(distPath, '.ejs'),
          ext: '.html',
      });
      fs.writeFile(htmlPath, str, () => {});
    });
  });
};

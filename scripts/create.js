const fs = require("fs");
const path = require("path");

const packageName = "modern-normalize";

const normalizePackage = JSON.parse(
  fs.readFileSync(`./node_modules/${packageName}/package.json`, "utf8")
);
const normalizeMain = path.join(
  `./node_modules/${packageName}`,
  normalizePackage.main
);
const readStream = fs.readFileSync(normalizeMain, "utf8");
const regex = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
const style = readStream.replace(regex, "").replace(/^\s*\n/gm, "");

const contents = `import { css } from '@emotion/react';

const modernNormalizeCss = css\`
${style}\`;

export default modernNormalizeCss;`;

fs.writeFileSync("./src/modernNormalizeCss.ts", contents);

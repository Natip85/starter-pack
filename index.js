#!/usr/bin/env node
const path = require("path");
const fs = require("fs-extra");

const projectName = process.argv[2];
if (!projectName) {
  console.error("Please provide a project name.");
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);
fs.copySync(path.join(__dirname, "template"), targetPath);
console.log(`✅ Project created in ${projectName}`);

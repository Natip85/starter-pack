#!/usr/bin/env node
const path = require("path");
const fs = require("fs-extra");

const projectName = process.argv[2];
if (!projectName) {
  console.error("❌ Please provide a project name:");
  console.error("   npx create-my-starter my-app-name");
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);

if (fs.existsSync(targetPath)) {
  console.error(`❌ Directory "${projectName}" already exists!`);
  process.exit(1);
}

// Copy the template to the new folder
const templatePath = path.join(__dirname, "next-starter-pack");
fs.copySync(templatePath, targetPath);

console.log(`✅ Project "${projectName}" created!`);
console.log(`👉 cd ${projectName}`);
console.log(`👉 pnpm install (or npm/yarn)`);
console.log(`👉 pnpm dev (to start your app)`);

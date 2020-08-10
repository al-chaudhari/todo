#!/home/akash/opt/node/bin/node
const readline = require("readline-sync");
const { home, doit_path, doit_profile, doit_projects } = require("./constants");
const fs = require("fs");
const { questionProfile } = require("./util");
const Argv = require("./argv");
const version = require("./version");

if (!fs.existsSync(home)) {
  console.error("Cannot Access your Home Directory");
  process.exit(0);
}

if (!fs.existsSync(doit_path)) {
  fs.mkdir(doit_path, { recursive: false }, (error) => {
    if (error) {
      console.error(error);
      process.exit(0);
    }
  });
}

if (!fs.existsSync(doit_profile)) {
  questionProfile();
}

if (!fs.existsSync(doit_projects)) {
  fs.writeFileSync(
    doit_projects,
    JSON.stringify({ doit_version: version, projects: [] })
  );
} else {
  let arg = new Argv();
}

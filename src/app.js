#!/home/akash/opt/node/bin/node
const readline = require("readline-sync");
const { home, doit_path, doit_profile, doit_projects } = require("./constants");
const fs = require("fs");
const { setProfile, printUsage, printSetUsage } = require("./util");
const Argv = require("./argv");
const version = require("./version");
const Project = require("./projects");
const { argv } = require("process");

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
  setProfile();
}

if (!fs.existsSync(doit_projects)) {
  fs.writeFileSync(
    doit_projects,
    JSON.stringify({ doit_version: version, projects: [] })
  );
}

let project = new Project();
let args = new Argv();

if (args.current("set")) {
  if (args.current("profile")) {
    setProfile();
  } else if (args.current("default")) {
    // set Default Here
  } else {
    printSetUsage();
  }
} else if (args.current("add")) {
} else if (args.current("delete")) {
} else if (args.current("show")) {
} else {
  printUsage();
}

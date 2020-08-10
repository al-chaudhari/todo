#!/home/akash/opt/node/bin/node
const readline = require("readline-sync");
const {
  home,
  doit_path,
  doit_profile,
  doit_projects,
  doit_tags,
} = require("./constants");
const fs = require("fs");
const { setProfile, printUsage, printSetUsage } = require("./util");
const Argv = require("./argv");
const version = require("./version");
const Project = require("./projects");
const { argv } = require("process");
const Tags = require("./tags");

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

if (!fs.existsSync(doit_tags)) {
  fs.writeFileSync(doit_tags, JSON.stringify({}));
}

let project = new Project();
let args = new Argv();
let tags = new Tags();

if (args.current("set")) {
  if (args.current("profile")) {
    setProfile();
  } else if (args.current("default")) {
    project.setDefault();
  } else {
    printSetUsage();
  }
} else if (args.current("add")) {
  if (args.current("tags")) {
    tags.addTag();
  } else if (args.current("project")) {
    project.addProject();
  }
} else if (args.current("delete")) {
  if (args.current("tags")) {
    tags.delete();
  } else if (args.current("project")) {
    project.deleteProject();
  }
} else if (args.current("show")) {
  if (args.current("tags")) {
    tags.show();
  } else if (args.current("project")) {
    project.showProject();
  } else if (args.current("default")) {
    project.showDefault();
  }
} else {
  printUsage();
}

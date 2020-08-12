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
const Tags = require("./tags");
const Board = require("./board");

/**
 * Home Not Accessable?
 * Exit with Message
 */
if (!fs.existsSync(home)) {
  console.error("Cannot Access your Home Directory");
  process.exit(0);
}

/**
 * Don't Have Doit Folder ?
 * Create Directory or
 * Report Error
 */
if (!fs.existsSync(doit_path)) {
  fs.mkdir(doit_path, { recursive: false }, (error) => {
    if (error) {
      console.error(error);
      process.exit(0);
    }
  });
}

/**
 * Have Doit Profile?
 * Create one!!
 */
if (!fs.existsSync(doit_profile)) {
  setProfile();
}

/**
 * Have Projects?
 * Crate A basic File
 * In Startup
 */
if (!fs.existsSync(doit_projects)) {
  fs.writeFileSync(
    doit_projects,
    JSON.stringify({ doit_version: version, projects: [] })
  );
}

/**
 * Startup Create
 * A Tags File
 */
if (!fs.existsSync(doit_tags)) {
  fs.writeFileSync(doit_tags, JSON.stringify({}));
}

let project = new Project();
let args = new Argv();
let tags = new Tags();

/**
 * This only Seems
 * Non Experienced But Uses
 * States
 */

if (args.current("set")) {
  if (args.current("profile")) {
    setProfile();
  } else if (args.current("default")) {
    project.setDefault();
  } else if (args.current("doing")) {
    project.setDoing();
  } else {
    printSetUsage();
  }
} else if (args.current("add")) {
  if (args.current("tags")) {
    tags.addTag();
  } else if (args.current("project")) {
    project.addProject();
  } else if (args.current("task")) {
    let board = new Board();
    board.addTask();
  }
} else if (args.current("delete")) {
  if (args.current("tags")) {
    tags.delete();
  } else if (args.current("project")) {
    project.deleteProject();
  } else if (args.current("task")) {
    let board = new Board();
    board.deleteTask();
  }
} else if (args.current("show")) {
  if (args.current("tags")) {
    tags.show();
  } else if (args.current("project")) {
    project.showProject();
  } else if (args.current("default")) {
    project.showDefault();
  } else if (args.current("profile")) {
    let s = JSON.parse(fs.readFileSync(doit_profile, { encoding: "utf-8" }));
    console.log(s.name, `| Minutes: ${s.minutes}`);
  } else if (args.current("task")) {
    let board = new Board();
    board.showTasks();
  }
} else if (args.current("move")) {
  if (args.current("task")) {
    let board = new Board();
    board.moveTask();
  }
} else {
  printUsage();
}

const { doit_projects } = require("./constants");
const fs = require("fs");
const readline = require("readline-sync");

class Project {
  constructor() {
    this.file = doit_projects;
    this.data = JSON.parse(fs.readFileSync(this.file, { encoding: "utf-8" }));
    this.projects = this.data.projects;
  }

  haveProjects = () => {
    return this.projects.length > 0;
  };

  addProject = () => {
    let time = readline.questionInt(
      "How many Minutes You Want to Spend in a Day? : "
    );
    let id = this.createID();
  };

  createID = () => {
    return parseInt(Math.random() * 100000);
  };
}

module.exports = Project;

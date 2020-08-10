const { doit_projects } = require("./constants");
const fs = require("fs");

class Project {
  constructor() {
    this.file = doit_projects;
    this.data = JSON.parse(fs.readFileSync(this.file, { encoding: "utf-8" }));
    this.projects = this.data.projects;
  }

  haveProjects = () => {
    return this.projects.length > 0;
  };
}

module.exports = Project;

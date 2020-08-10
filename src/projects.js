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
    let name = readline.question("Project Name : ", {
      limit: (input) => {
        return input.length > 0 && this.getProjectNames().indexOf(input) < 0;
      },
      limitMessage: "Project Exist Or Invalid Input",
    });

    let time = readline.questionInt(
      "How many Minutes You Want to Spend in a Day? : "
    );
    let id = this.createID();
    this.data.projects.push({
      id: id,
      doing: false,
      defualt: false,
      time: time,
      name: name,
    });

    this.save();
  };

  createID = () => {
    let id = parseInt(Math.random() * 100000);
    while (this.getIds().indexOf(id) >= 0) {
      id = parseInt(Math.random() * 100000);
    }
    return id;
  };

  getIds = () => {
    let storage = [];
    for (let i of this.data.projects) {
      storage.push(i.id);
    }
    return storage;
  };

  save = () => {
    fs.writeFileSync(doit_projects, JSON.stringify(this.data));
  };

  getProjectNames = () => {
    let storage = [];
    for (let i of this.data.projects) {
      storage.push(i.name);
    }
    return storage;
  };

  setDefault = () => {
    let def = readline.keyInSelect(
      this.getProjectNames(),
      "Select Default Project"
    );

    let name = this.getProjectNames()[def];
    for (let i of this.data.projects) {
      if (i.name == name) {
        i.defualt = true;
      } else {
        i.defualt = false;
      }
    }
    this.save();
  };

  deleteProject = () => {
    let def = readline.keyInSelect(
      this.getProjectNames(),
      "Select Project to Delete"
    );

    let name = this.getProjectNames()[def];

    for (let i = 0; i < this.data.projects.length; i++) {
      if (this.data.projects[i].name == name) {
        this.data.projects.splice(i, 1);
      }
    }

    this.save();
  };
}

module.exports = Project;

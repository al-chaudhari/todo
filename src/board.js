const readline = require("readline-sync");
const fs = require("fs");
const { doit_projects, doit_path } = require("./constants");
const Tags = require("./tags");
const path = require("path");

/**
 * Board!!
 * -------
 */

class Board {
  constructor() {
    this.default = this.getDefault();
    this.path = path.join(doit_path, `${this.default}.json`);
    this.data = JSON.parse(fs.readFileSync(this.path, { encoding: "utf-8" }));
    this.tags = new Tags();
  }

  getDefault = () => {
    let data = JSON.parse(
      fs.readFileSync(doit_projects, { encoding: "utf-8" })
    );

    let projects = data.projects;
    for (let i of projects) {
      if (i.defualt == true) {
        return i.id;
      }
    }
    console.log("Please Set Default Project");
    process.exit(0);
  };

  addTask = () => {
    let board = readline.question("Which Board: ", {
      limit: ["do", "doing", "done"],
      limitMessage: "Can be Only One",
    });

    let task = readline.question("Name Task : ", {
      limit: (value) => {
        return this.getTasksFromBoard(board).indexOf(value) < 0;
      },
      limitMessage: "Task Already Exist",
    });
    let id = this.createID();
    let time = readline.questionInt("How much Time it Should Take: ");
    let cost = readline.questionInt("How much Cost it Should Take: ");
    let priority = readline.question("Priority: ", {
      limit: ["low", "mid", "high"],
    });
    let tags = readline.keyInSelect(this.tags.getTags(), "Select Tag");
    tags = tags == -1 ? [] : tags;

    this.data[board].push({
      id: id,
      name: task,
      time: time,
      cost: cost,
      priority: priority,
      tag: tags,
    });

    this.save();
  };

  save() {
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }

  getTasksFromBoard(board) {
    let _storage = [];
    let tasks = this.data[board];
    for (let i of tasks) {
      _storage.push(i.name);
    }
    return _storage;
  }

  createID = () => {
    let id = parseInt(Math.random() * 100000);
    while (this.getIds().indexOf(id) >= 0) {
      id = parseInt(Math.random() * 100000);
    }
    return id;
  };

  getIds() {
    let _storage = [];
    for (let i of this.data.do) {
      _storage.push(i.id);
    }

    for (let i of this.data.doing) {
      _storage.push(i.id);
    }

    for (let i of this.data.done) {
      _storage.push(i.id);
    }
    return _storage;
  }
}

module.exports = Board;

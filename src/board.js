const readline = require("readline-sync");
const fs = require("fs");
const { doit_projects } = require("./constants");
const Tags = require("./tags");

/**
 * Board!!
 * -------
 */

class Board {
  constructor() {
    this.default = this.getDefault();
    this.data = JSON.parse(
      fs.readFileSync(`${this.default}.json`, { encoding: "utf-8" })
    );
    this.tag = new Tags();
  }

  getDefault = () => {
    let data = JSON.parse(
      fs.readFileSync(doit_projects, { encoding: "utf-8" })
    );
    let projects = data.projects;
    for (let i of projects) {
      if (i.default == true) {
        return i;
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

    let task = readline.question("Name Task : ");
    let id = this.createID();
    let time = readline.questionInt("How much Time it Should Take: ");
    let cost = readline.questionInt("How much Cost it Should Take: ");
    let priority = readline.question("Priority: ", {
      limit: ["low", "mid", "high"],
    });
    let tags = readline.keyInSelect(["one", "two", "three"]);
  };

  getTasksFromBoard(board) {}

  createID() {}
}

module.exports = Board;

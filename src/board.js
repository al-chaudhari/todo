const readline = require('readline-sync');
const fs = require('fs');
const { doit_projects } = require('./constants');
/**
 * Board!!
 * -------
 */

class Board {
    constructor() {
        this.default = this.getDefault();
    }

    getDefault = () => {
        let data = JSON.parse(fs.readFileSync(doit_projects, {encoding: 'utf-8'}));
        let projects = data.projects;
        for(let i of projects) {
            if(i.default == true) {
                return i;
            }
        }
        console.log("Please Set Default Project");
        process.exit(0);
    }

    addTask = (tasks) => {
        for(let i of tasks) {
            
        }
    }

}


module.exports = Board;
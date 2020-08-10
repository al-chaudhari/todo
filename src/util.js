const readline = require('readline-sync');
const fs = require('fs');
const {doit_profile}  = require('./constants');

function questionProfile() {
    const name = readline.question("What is Your Name: ", { defaultInput: "doit-user" });
    const time_value = readline.questionInt("How Many Minutes Do you have in a Day :");
    fs.writeFileSync(doit_profile, JSON.stringify({
        name: name,
        minutes: time_value
    }))
}

function contains(value) {

}

function addProject() {
}

module.exports = {
    questionProfile
}
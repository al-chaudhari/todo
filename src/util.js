const readline = require("readline-sync");
const fs = require("fs");
const { doit_profile } = require("./constants");

function setProfile() {
  const name = readline.question("What is Your Name: ", {
    defaultInput: "doit-user",
  });
  const time_value = readline.questionInt(
"How Many Minutes Do you have in a Day ⌛ : "
  );
  fs.writeFileSync(
    doit_profile,
    JSON.stringify({
      name: name,
      minutes: time_value,
    })
  );
}


function printUsage() {
  console.log(
    `Usage: doit [options]
Options:
    set   : For Setting Profile Or Default Project
    add   : For Adding Task, Board, Project etc.
    move  : For moving Tasks in Boards
    delete: For Deleting Task, Boards...
    show  : For Listing
`
  );
}

function printSetUsage() {
  console.log(
    `Usage: doit set [options]
Options:
    profile   : For Setting Your Profile
    default   : For Setting Your Default Project
`
  );
}

function printAddUsage() {
  console.log(
    `Usage: doit add [options]
Options:
    tag     : For Addding Tags
    project : For Adding Project
    task    : For Adding Task to Default Project
`
  );
}

function printDeleteUsage() {
  console.log(
    `Usage: doit delete [options]
Options:
    tag     : For Deleting Tags
    project : For Deleting Project
    task    : For Deleting Task to Default Project
`
  );
}

printAndExit = (message) => {
  console.log(message);
  process.exit(0)
}

module.exports = {
  setProfile,
  printUsage,
  printSetUsage,
  printAndExit,
  printAddUsage,
  printDeleteUsage
};

class Argv {
  constructor() {
    this.args = process.argv;
    console.log(this.args);
  }
}

module.exports = Argv;

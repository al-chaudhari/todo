class Argv {
  niddle = 0;
  constructor() {
    this.args = process.argv;
    this.consume(2);
  }

  consume(num = 1) {
    this.args.splice(0, num);
  }

  next(value) {
    return this.args[this.niddle + 1] == value;
  }

  up() {
    this.niddle += 1;
  }

  current(value) {
    if (this.args[this.niddle] == value) {
      this.consume();
      return true;
    }
    return false;
  }
}

module.exports = Argv;

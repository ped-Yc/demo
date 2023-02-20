var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  wirting() {
    this.fs.write(this.destinationPath("test.txt"), Math.random().toString());
  }

  method1() {
    this.log("method 1 just ran");
  }

  method2() {
    this.log("method 2 just ran");
  }
};

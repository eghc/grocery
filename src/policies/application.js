module.exports = class ApplicationPolicy {

 // #1
  constructor(user) {
    this.user = user;
  }


 // #3
  new() {
    return this.user != null;
  }

  create() {
    return this.new();
  }

  show() {
    return this.new();
  }

 // #4
  edit() {
    return this.new();
  }

  update() {
    return this.edit();
  }

 // #5
  destroy() {
    return this.update();
  }
}

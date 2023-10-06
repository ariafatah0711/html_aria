export default class {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.info(`hai ${name}, my name is ${this.name}`);
  }
}

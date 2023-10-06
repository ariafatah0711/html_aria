const company = "Web Code Network";

function sum(first, second) {
  return first + second;
}

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.log(`hello ${name}, my name is ${this.name}`);
  }
}

export { company as perusahaan, sum as total, Person as Orang };

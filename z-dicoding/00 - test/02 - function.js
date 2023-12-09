/* --------------------------------------------------------------------------- */
// reguler function
function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
  // this -> People
  setTimeout(function () {
    // function biasa tidak dapat mengakses this karena
    // dia tidak menambahkan new untuk membuat object baru
    // this -> ??
    console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
    console.log(`Hobby saya adalah ${this.hobby}`);
  }, 300);
};

let programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();

// arrow function
function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
  // this -> People
  setTimeout(() => {
    // this -> People
    console.log(`\nHello! Nama saya ${this.name}, umur saya ${this.age}.`);
    console.log(`Hobby saya adalah ${this.hobby}`);
  }, 300);
};

programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();

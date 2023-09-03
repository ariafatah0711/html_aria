// #####################################################################################################
// object
// #####################################################################################################
// variable biasa
var car = "mobil fiat";

// variable object
var car = {
  // propety
  type: "fiat",
  model: "500",
  color: "red",

  // method
  start: function () {
    console.log("ini method start");
  },
  drive: function () {
    console.log("ini method drive");
  },
  stop: function () {
    console.log("ini method stop");
  },
};

// mengakses propety dan method pada variable objct
console.log(car.type);
console.log(car.model);

car.start();
car.stop();

// #####################################################################################################
// menggunakan keyword this
var person = {
  firstName: "aria",
  lastName: "anom",
  showName: function () {
    alert(`name: ${this.firstName} ${this.lastName}`);
  },
};

// #####################################################################################################
// membuat class
function Person(firstName, lastName) {
  // propety
  this.firstName = firstName;
  this.lastName = lastName;

  // method
  this.fullName = function () {
    return `${this.firstName} ${lastName}`;
  };
  this.showName = function () {
    document.write(this.fullName());
  };
}

var Person1 = new person("aria", "anom");
// var Person2 = new person("abdul", "malik");

// Person1.showName();
// Person("aria", "fatah");

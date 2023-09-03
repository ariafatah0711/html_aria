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
function person(firstName, lastName) {
  // propety
  this.firstName = firstName;
  this.lastName = lastName;

  // method
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.showName = function () {
    document.write(this.fullName());
  };
}

var person1 = new person("aria", "anom");
// var person2 = new person("abdul", "malik");

person1.showName();
// person("aria", "fatah");

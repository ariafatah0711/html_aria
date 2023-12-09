// destructuring object
const profil = {
  firstName: "aria",
  middleName: "fatah",
  lastName: "anom",
  age: 15,
};

// jika ingin membuat var untuk masing masing value object
var { firstName, middleName, lastName } = profil;
console.log(`${firstName}, ${middleName}, ${lastName}`); // aria

let firstName = "zaki";
let middleName = "zaki";
let lastName = "zaki";
let age = "zaki";
let kelas = "zaki";

// jika meninitialized nama baru
({ firstName, middleName, lastName, age, kelas } = profil);

// destructuring array
const buah = ["apel", "anggur", "pisang"];

const [buah1, buah2, buah3, buah4 = none] = buah;

// swap value
let a = 1;
let b = 2;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

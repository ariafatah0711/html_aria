/* <---------------------------------------------------------------------------> */
// destructuring object
const profil = {
  firstName: "aria",
  middleName: "fatah",
  lastName: "anom",
  age: 15,
};

// jika ingin membuat var untuk masing masing value object
let { firstName, middleName, lastName } = profil;
console.log(`${firstName}, ${middleName}, ${lastName}`); // aria, fatah, anom

/* <---------------------------------------------------------------------------> */
firstName = "zaki";
middleName = "zaki";
lastName = "zaki";
let age = "zaki";
let kelas = "zaki";

// jika meninitialized nama baru
({ firstName, middleName, lastName, age, kelas } = profil);
console.log(`${firstName}, ${middleName}, ${lastName}, ${age}, ${kelas}`); // aria, fatah, anom, 15, undefined

/* --------------------------------------------------------------------------- */
// destructuring array
const buah = ["apel", "anggur", "pisang"];

let [buah1, buah2, buah3, buah4 = "none"] = buah;

// swap value
let a = 1;
let b = 2;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b, "\n");

/* --------------------------------------------------------------------------- */
// spearading operator => membentangkan nilai array menjadi object
const favorite = ["seafood", "salad", "burger"];

console.log(favorite); // [ 'seafood', 'salad', 'burger' ]
console.log(...favorite); // seafood salad burger
console.log(favorite[0], favorite[1], favorite[2]);

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [...favorites, ...others]; // dengan menambahkan array di kanan kirinya akan membuat ini di dalam array

console.log(allFavorites);

// rest paramter => menggabungkan beberapa data menjadi array
const bag = ["book", "pensil", "handphone", "shoes", "milk", "noodle"];
const [first, second, last, ...more] = bag;

console.log(first);
console.log(second);
console.log(last);
console.log(more);
console.log("");

/* --------------------------------------------------------------------------- */
// arrow function
const upperizedNames = ["Dimas", "Widy", "Buchori"].map((name) =>
  name.toUpperCase()
);
console.log(...upperizedNames);

let name = "aria";

// stored in variable
const sayName = (name) => console.log(`nama saya ${name}`);

// passed an argument
["aria", "fatah", "anom"].forEach((name) => console.log(name));

// stored in object property
const user = {
  introduction: (name) => console.log(`nama saya ${name}`),
  address: (counrty, city) => console.log(`saya tinggal di ${country} ${city}`),
};

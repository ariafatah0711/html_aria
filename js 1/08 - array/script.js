// #####################################################################################################
// membuat array
var product = ["flashdisk", "SSD", "Monitor"];
var myData = ["string", 10, 1.2, true];

// #####################################################################################################
// menipulasi array
var barang = ["helm"];

barang.push("baju"); //-> ["helm", "baju"]
barang.unshift("henphone"); //-> ["henphone, "helm", "baju"]

barang.pop(); //-> ["henphone, "helm"]
barang.shift(); //-> ["helm"]

barang[0] = "head"; //-> ["head"]

// #####################################################################################################
// method
barang = ["head", "badan", "foot", "tangan"];
barang.splice(1, 1, "body"); //-> ["head", "body", "foot", "tangan"]
barang.splice(3, 1); //-> ["head", "body", "foot"]

let angka = [3, 2, 5, 4];
angka.sort(); //-> [2, 3, 4, 5]

let bahasa = ["html", "css", "javascript"];
bahasa.join("-"); //-> ["html-css-javascript"]

var string = "aria fatah anom";
var array = string.split(" "); //-> ["aria", "fatah", "anom"]
console.log(array);

angka = [2, 3, 4, 5];
let angka2 = angka.includes(2); //-> true

var buah = ["apel", "anggur", "apel"];
var i = buah.indexOf("apel");
console.log(i); //-> 0 (ada)
i = buah.lastIndexOf("apel");
console.log(i); //-> 2 (ada)
i = buah.indexOf("pisang");
console.log(i); //-> -1 (tidak ada)

angka = [2, 3, 4, 5];
let kuadrat = angka.map(function (elemen) {
  return elemen * elemen;
}); //-> [4, 9, 16, 25]

let genap = angka.filter(function (elemen) {
  return elemen % 2 === 0;
}); //-> [2, 4]

let total = angka.reduce(function (akumulator, elemen) {
  return akumulator + elemen;
}); //-> [14]

// #####################################################################################################
// menggabungkan array dan memisahkan array
let array1 = [1, 2, 3];
let array2 = [4, 5];

let gabung = array1.concat(array2); //-> [1, 2, 3, 4, 5]
let subset = gabung.slice(1, 4); //-> [2, 3, 4]

// #####################################################################################################
// mencetak array dengan perulangan
// #####################################################################################################
product = ["Senter", "Radio", "Baju", "sepatu", "celana"];
console.log(product);
console.log("for (let i = 0; i < product.length; i++) {");

for (let i = 0; i < product.length; i++) {
  console.log(i + ". " + product[i]);
}

console.log("\nproduct.forEach((data) => {");
product.forEach((data) => {
  console.log(data);
});

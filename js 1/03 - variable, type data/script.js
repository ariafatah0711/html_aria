// ####################################################################################################
// membuat variable
var nama_variable = "value";
var carnelCase = "valuecarnelcase";

// macam macam variable
// 1. var juga dapat di panggil lagi meski tidak di awali var
// cakupanya global scope (seluruh tempat)
var nama = "aria";
nama = "aria fatah <br>";

document.write("nama: " + nama);

// 2. let juga dapat di panggil lagi meski tidak di awali let
// cakupanya block scope (hanya dapat di akses di dalam block tempat mereka di deklarasikan)
function blockScope() {
  //   var nama = "aria fatah <br>";
  let nama = "malik <br>";
  document.write("nama: " + nama); // akan mengakses var terbaru
}

blockScope();
document.write("nama: " + nama); // akan mengakses var global

// 3. const adalah variable yang tidak dapat diubah valuenya setelah di buat
// cakuppanya block scope
const nama_lengkap = "aria fatah anom";
// nama_lengkap = "aria"; // akan terjadi error

console.log(nama_lengkap + "\n\n");

// ####################################################################################################
// menghapus value variable
var nama = "aria";
let kelas = 11;
const jumlahSiswa = 35;

console.log(nama);
console.log(kelas);
console.log(jumlahSiswa + "\n\n");

delete nama;
delete kelas;
delete jumlahSiswa;

nama = "ariafatah";
kelas = 12;
// jumlahSiswa = 36;

console.log(nama);
console.log(kelas);
console.log(jumlahSiswa + "\n");

// ####################################################################################################
// type data

// 1. string
let string = "text";

// 2. integer / float
let angka = 100;
angka = 90.5;

// 3. boolean
let isStudent = true;
let haveCar = false;

// 4. null
let empetyValue = null;

// 5. undefined
let undefinedValue;

// 6. object
let person = {
  firstName: "aria",
  lastName: "anom",
  age: 30,
};

// 7. array
let colors = ["red", "green", "blue"];

// 8. function
function greet(nama) {
  console.log("hello, " + nama + "!");
}

// 9. symbol
const uniqueSymbol = Symbol("description");

// ####################################################################################################
var fullName = "aria fatah anom";
kelas = "XI TKJ 4";
var age = 16;

document.write("<hr>");
document.write("nama: " + fullName + "<br>");
document.write("kelas: " + kelas + "<br>");
document.write("umur: " + age + "<br>");

// ####################################################################################################
var namaSatu = "aria",
  namaDua = "fatah",
  namaTiga = "anom";

// ####################################################################################################
// combination string and number
var text_1 = 21 + "string"; // return string ("21string")
var text_2 = "string" + 21; // return string ("string21")

// dari kiri 10 dan 11 akan dijumlahkan terlebih dahulu
text_1 = 10 + 11 + "string"; // return string ("21string")
// namun saat dari kanan 10 11 akan di definisikan sebagai string karena penjumlahanya tidak di perioritaskan di kiri
text_2 = "string" + 10 + 11; // return string ("string1011")

// ####################################################################################################
// cara mengetahui type data
typeof "nama aku aria"; // return string
typeof 20; //return number
typeof true; // return boolean

// ####################################################################################################
console.log("\ntype data\n");
console.log(string);
console.log(angka);
console.log(isStudent);
console.log(empetyValue);
console.log(undefinedValue);
console.log(colors);
greet(nama);
console.log(Symbol);

var button1 = document.getElementById("satu");
button1.write();
button1.innerHTML();

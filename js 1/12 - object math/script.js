// trigonometri
Math.sin(10); // -0.5440211108893698
Math.cos(10); // -0.8390715290764524
Math.tan(10); // 0.6483608274590866

// logaritma
Math.log(1); // 0
Math.log(10); // 2.302585092994046

// pangkat
Math.pow(4, 2); // 16
Math.pow(4, 4); // 256
Math.pow(5, 2); // 25

// eksponan
Math.exp(1); // 2.718281828459045
Math.exp(2); // 7.38905609893065
Math.exp(3); // 20.085536923187668

// ###################################################################################################
// pembulatan

// floor = membulatkan ke bawah
Math.floor(2.4); // 2
Math.floor(2.7); // 2

// ceil = membulatkan ke atas
Math.ceil(2.7); // 3
Math.ceil(2.4); // 3

// round = membulatkan ke terdekat, bisa kebawah dan ke atas
Math.round(2.4); // 2
Math.round(2.6); // 3

// ###################################################################################################
// fungsi akar
Math.sqrt(25); // 5
Math.sqrt(81); // 9
Math.sqrt(40); // 6.324555320336759

// akar kubik
Math.cbrt(125); // 5

// akar n / nth root
// Math.pow(n, 1 / root);

var empatPangkatEmpat = 4 * 4 * 4 * 4; // 256
Math.pow(256, 1 / 4); // 4

// ###################################################################################################
// fungsi random = fungsi yang menghasilkan nilai acak 0.0 - 1.0
Math.random(); // 0.4918651956
Math.random(); // 0.7592916419

// fungsi random dengan min dan maks
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
getRandomInt(1, 100); // 68
getRandomInt(1, 100); // 5
getRandomInt(1, 100); // 22

// ###################################################################################################
// fungsi mutlak = menghasilkan nilai positif
var x = Math.abs(-2); // 2
var x = Math.abs(2); // 2

// ###################################################################################################
// fungsi minimum = mencari angka terkecil
Math.min(3, 2, 2, 1, 4); // 1

// fungsi maximum = mencari angka terbesar
Math.max(3, 2, 2, 1, 4); // 4

// fungsi min max pada array
Math.max([10, 5, 1]); // NaN
Math.max(...[10, 5, 1]); // 10
// ...[array] berfungsi untuk memcah nilai array

// ###################################################################################################
// konstanta di object math
Math.E; // return Euler's number
Math.PI; // return PI
Math.SQRT2; // return the square root of 2
Math.SQRT1_2; // return the square root of 1/2
Math.LN2; // return the logarithm of 2
Math.LN10; // return the logarithm of 10
Math.LOG2E; // return base 2 logarithm of E
Math.LOG10E; // return base 10 logarithm of E

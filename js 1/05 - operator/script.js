// ######################################################################################################
// operasi aritmatika
var x = 10;
var y = 5;
var hasilPenjumlahan = x + y; // result 15
var hasilPengurangan = x - y; // result 5
var hasilPerkalian = x * y; // result 50
var hasilPembagian = x / y; // result 2
var sisaHasilBagi = x % y; // result 0
var hasilPangkat = x ** y; // result 100000

console.log(hasilPenjumlahan);
console.log(hasilPengurangan);
console.log(hasilPerkalian);
console.log(hasilPembagian);
console.log(sisaHasilBagi);
console.log(hasilPangkat);
console.log();

// operasi perbandingan
var a = 10;
var b = 5;
var isEqual = a == b; // false
var isNotEqual = a != b; // true
var isStrictEqual = a === b; // false
var isStrictNotEqual = a !== b; // true
var isGreater = a > b; // true
var isLess = a < b; // false
var isGreaterOrEqual = a >= b; // true
var isLessOrEqual = a <= b; // false

console.log(isEqual);
console.log(isNotEqual);
console.log(isStrictEqual);
console.log(isStrictNotEqual);
console.log(isGreater);
console.log(isLess);
console.log(isGreaterOrEqual);
console.log(isLessOrEqual);
console.log();

// operasi logika
var p = true;
var q = false;
var logicalAnd = p && q; // false
var logicalOr = p || q; // true
var logicalNotP = !p; // false
var logicalNotQ = !q; // true

console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNotP);
console.log(logicalNotQ);
console.log();

// operasi penugasan
var num = 10;
console.log(num);
num += 5; // num menjadi 15
console.log(num);
num -= 3; // num menjadi 12
console.log(num);
num *= 2; // num menjadi 24
console.log(num);
num /= 4; // num menjadi 6
console.log(num);
num %= 5; // num menjadi 1
console.log(num);
console.log();

// operasi increment dan decrement
var counter = 5;
counter++; // counter menjadi 6
counter--; // counter menjadi 5 kembali

var x = 5;
var y = ++x; // y akan menjadi 6, x juga akan menjadi 6
console.log(y + "" + x);

var a = 10;
var b = a++; // b akan menjadi 10, a akan menjadi 11
console.log(b + "" + a);

var x = 5;
var y = --x; // y akan menjadi 4, x juga akan menjadi 4
console.log(y + "" + x);

var a = 10;
var b = a--; // b akan menjadi 10, a akan menjadi 9
console.log(b + "" + a);
console.log();

// operasi conditional
var age = 18;
var canVote = age >= 18 ? "Boleh Memilih" : "Tidak Boleh Memilih";
console.log(canVote);

// operasi bitwise
var x = 5; // 0101 dalam representasi biner
var y = 3; // 0011 dalam representasi biner
var bitwiseAnd = x & y; // 0001, hasil: 1
var bitwiseOr = x | y; // 0111, hasil: 7
var bitwiseXor = x ^ y; // 0110, hasil: 6
var bitwiseNot = ~x; // 1010, hasil: -6
var shiftLeft = x << 1; // 1010, hasil: 10
var shiftRight = x >> 1; // 0010, hasil: 2
var shiftUnsignedRight = x >>> 1; // 0010, hasil: 2

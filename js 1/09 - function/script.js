// #######################################################################################################
// function
// #######################################################################################################

// function normal
function namaFungsi() {
  console.log("function namaFungsi() {");
}
namaFungsi();

// function dengan expresi
var namaFungsi = function () {
  console.log("\nvar namaFungsi = function() {");
};
namaFungsi();

// function dengan tanda panda
var namaFungsi = () => {
  console.log("\nvar namaFungsi = () => {\n");
};
namaFungsi();
// atau
var namaFungsi = () => console.log("var namaFungsi = () => console.log()");
namaFungsi();

// function dengan konstruktor
var namaFungsi = new Function('console.log("var namaFungsi = new Function()")');
console.log(" ");

// #######################################################################################################
// function dengan parameter
// #######################################################################################################

// fungsi menggunakan parameter
function tambah(a, b) {
  let hasil = a + b;
  console.log(hasil);
}

// memanggil fungsi
tambah(5, 10);

var perkalian = (a, b) => console.log(a * b);
perkalian(2, 10);

// fungsi yang mengembalikan nilai
function bagi(a, b) {
  let hasil = a / b;
  return hasil;
}

// memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilBagi = bagi(nilai1, nilai2);

console.log(hasilBagi);

// #######################################################################################################
// progam javascript dengan fungsi
// #######################################################################################################
var dataBarang = ["Buku Tulis", "Pensil", "Spidol"];

function showBarang() {
  var listBarang = document.getElementById("list-barang");
  // clear list barang
  listBarang.innerHTML = "";

  // cetak semua barang
  for (let i = 0; i < dataBarang.length; i++) {
    var btnEdit = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
    var btnHapus = "<a href='#' onclick='deleteBarang(" + i + ")'>Hapus</a>";

    listBarang.innerHTML +=
      "<li>" + dataBarang[i] + " [" + btnEdit + " | " + btnHapus + "]</li>";
  }
}

function addBarang() {
  var input = document.querySelector("input[name=barang]");
  dataBarang.push(input.value);
  showBarang();
}

function editBarang(id) {
  var newBarang = prompt("Nama Baru", dataBarang[id]);
  dataBarang[id] = newBarang;
  showBarang();
}

function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}

showBarang();

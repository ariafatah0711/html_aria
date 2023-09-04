// ########################################################################################################
// DOM
// ########################################################################################################
document.write("hello world");

// mengakses object head
document.head;

// mengakses object body
document.body;

// melihat panjang judul pada object title
document.title.length;

// ########################################################################################################
// mengakses elemen spesifik
var div1 = document.getElementById("id");
var div2 = document.getElementsByClassName("class")[0];
var button = document.getElementsByName("name")[0];
var link = document.getElementsByTagName("a");
var pFirst = document.querySelector("p");
var Pall = document.querySelectorAll("p");

// mengisi teks ke dalam elemen
div1.innerText =
  "ini adalah elemen yang memilki id='id' dan telah diubah teksnya menggunakan div1.innerText";

// memberikan CSS ke elemen
div1.style.backgroundColor = "red";
div2.style.backgroundColor = "blue";
button.style.border = "10px solid green";

for (let i = 0; i < link.length; i++) {
  link[i].style.textDecoration = "none";
}

pFirst.style.backgroundColor = "blue";
for (let i = 0; i < Pall.length; i++) {
  Pall[i].style.color = "red";
}

// ########################################################################################################
// elemen dengan class, name, tag, dan queryselectorAll memiliki array
var paragraf = document.getElementsByClassName("paragraf");
console.log(paragraf); //=> array

// membuat animasi warna menggunakan ser interval dan timeout
setInterval(function () {
  // menjalankan sesuatu secara berulang
  paragraf[0].style.color = "red";
  paragraf[1].style.color = "yellow";
  paragraf[2].style.color = "green";

  setTimeout(function () {
    // menjalankan sesuatu setelah penundaan selesai
    paragraf[0].style.color = "black";
    paragraf[1].style.color = "black";
    paragraf[2].style.color = "black";
  }, 500);
}, 1000);

// ########################################################################################################
// membuat elemen dengan DOM API
var div3 = document.getElementsByClassName("div3")[0];

// membuat elemen h1
var judul = document.createElement("h4");

// mengisi konten elemen
judul.textContent = "ini adalah isi dari elemen h4 yand ditambah peke DOM api";

// menambahkan elemen ke dalam tag body
document.body.append(judul); // akan tampil di paling bawah
div3.appendChild(judul); // akan tampil di dalam elemen div

// ########################################################################################################
// atau menggunakan inner html
div3.innerHTML +=
  "<h5>ini adalah h5 yang ditambahkan menggunakan div3.innerHTML += ''</h5>";

// ########################################################################################################
// menghapus elemen
var removeP = document.getElementById("remove");
removeP.remove();

console.log(removeP);

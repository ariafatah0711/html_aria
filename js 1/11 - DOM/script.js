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
var div2 = document.getElementsByClassName("class");
var button = document.getElementsByName("name");
var link = document.getElementsByTagName("a");
var pFirst = document.querySelector("p");
var Pall = document.querySelectorAll("p");

// mengisi teks ke dalam elemen
div1.innerText =
  "ini adalah elemen yang memilki id='id' dan telah diubah teksnya menggunakan div1.innerText";

// memberikan CSS ke elemen
div1.style.backgroundColor = "red";
div2.style.backgroundColor = "blue";
button.style.border = "1px solid green";

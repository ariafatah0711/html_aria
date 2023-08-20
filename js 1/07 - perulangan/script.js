// ######################################################################################################
// for
console.log("for (let i = 0; i < 10; i++)");
// cara kerjanya adalah for lalu ada let i = 0 yang artinya membuat var i = 0
// lalu ; i < 10 ini adalah kondisi jika i kurang dari 10 maka akan menjalankan,
// ; i++ yang artinya variabel i ditambah 1 dan diulang sampai kondisi menjadi i < 10 yaitu saat var i menjadi 10

for (let i = 0; i < 10; i++) {
  console.log("perulangan ke-" + i);
}

// console.log("\nfor (let i = 10; i > 0; i--)");

// for (let i = 10; i > 0; i--) {
//   console.log("perulangan ke-" + i);
// }

// perulangan while
console.log("\nvar i = 0;");
console.log("while (i < 10)");

var i = 0;
while (i < 10) {
  console.log("perulagan ke-" + i);
  i++;
}

// perulangan do/while
console.log("\ndo {i++; block statment} while (i < 10)");
var i = 0;
do {
  i++;
  console.log("perulangan ke-" + i);
} while (i < 10);

// ######################################################################################################
var fruits = ["banana", "apple", "manggo", "orange"];

for (let i = 0; i < fruits.length; i++) {
  let newText = document.createElement("p");
  newText.textContent = i + "." + fruits[i];
  document.body.appendChild(newText);
}

var len = fruits.length;
var i = 0;
var html = "";
while (i < len) {
  html += "<p>I like " + fruits[i] + "</p>";
  i++;
}

document.getElementById("p-1").innerHTML = html;

let hr = document.createElement("hr");
document.body.appendChild(hr);

// ######################################################################################################
function fungsi1() {
  var i = 0;
  var ulangi = confirm("apakah anda ingin mau mengulang");

  while (ulangi) {
    i++;
    ulangi = confirm("apakah anda ingin mau mengulang");
  }

  newText = document.createElement("p");
  newText.textContent = "perulangan sudah dilakukan sebanyak" + i;
  document.body.appendChild(newText);
}

function fungsi2() {
  var i = 0;
  var ulangi = confirm("apakah anda ingin mau mengulang");

  do {
    i++;
    ulangi = confirm("apakah anda ingin mau mengulang");
  } while (ulangi);

  newText = document.createElement("p");
  newText.textContent = "perulangan sudah dilakukan sebanyak" + i;
  document.body.appendChild(newText);
}

var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");

btn1.addEventListener("click", fungsi1);
btn2.addEventListener("click", fungsi2);

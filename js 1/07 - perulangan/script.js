// ######################################################################################################
// for
// ######################################################################################################
console.log("for (let i = 0; i < 10; i++)");
// cara kerjanya adalah for lalu ada let i = 0 yang artinya membuat var i = 0
// lalu ; i < 10 ini adalah kondisi jika i kurang dari 10 maka akan menjalankan,
// ; i++ yang artinya variabel i ditambah 1 dan diulang sampai kondisi menjadi i < 10 yaitu saat var i menjadi 10

for (let i = 0; i < 10; i++) {
  console.log("perulangan ke-" + i);
}

// ######################################################################################################
// perulangan while
// ######################################################################################################
console.log("\nvar i = 0;");
console.log("while (i < 10)");

var i = 0;
while (i < 10) {
  console.log("perulagan ke-" + i);
  i++;
}

// ######################################################################################################
// perulangan do/while
// ######################################################################################################
console.log("\ndo {i++; block statment} while (i < 10)");
var i = 0;
do {
  i++;
  console.log("perulangan ke-" + i);
} while (i < 10);

// ######################################################################################################
// perulangan forEach
// ######################################################################################################
var languages = ["javascript", "HTML", "CSS", "Typescript"];

// for normal
console.log("\nfor (i = 0; i < languages.length; i++) {");

for (i = 0; i < languages.length; i++) {
  console.log(i + ". " + languages[i]);
}

// for in
console.log("\nfor (i in languages) {");

for (i in languages) {
  console.log(i + ". " + languages[i]);
}

// for of
console.log("\n");
text = "aria";

for (letter of text) {
  console.log(letter);
}

// forEach()
console.log("\ndays.forEach(function (day) {");

var days = ["senin", "selasa", "rabu", "kamis", "jumat"];

days.forEach(function (day) {
  console.log(day);
});

console.log("\ndays.forEach((day) => {");
days.forEach((day) => {
  console.log(day);
});

// ######################################################################################################
// repeat()
// ######################################################################################################
console.log("\nfor (let i = 0; i < 3; i++) {");

for (let i = 0; i < 3; i++) {
  console.log("ulangi kalimat ini");
}

console.log("\nlog('ulangi kalimat ini'.repeat(3));");
console.log("ulangi kalimat ini\n".repeat(3));

// ######################################################################################################
// perulangan nested(bersarang)
// ######################################################################################################
console.log("\nfor (let i = 0; i < 1; i++) {");
console.log("  for (let j = 1; j < 10; j++) {");

for (let i = 0; i < 1; i++) {
  for (let j = 1; j < 10; j++) {
    console.log("perulangan ke-" + i + "." + j);
  }
}

// ######################################################################################################
// break and continue
// ######################################################################################################
console.log("\nif (i === 3) {break;}");
for (var i = 0; i < 10; i++) {
  if (i === 3) {
    break; // loop berhenti setelah i = 3
  }
  console.log(i);
}

console.log("\nif (i === 2 || i === 3) {continue;}");
for (var i = 0; i < 5; i++) {
  if (i === 2 || i === 3) {
    continue; // iterasi diabaikan saat i = 2 atau i = 3
  }
  console.log(i);
}

// ######################################################################################################
// contoh for
var fruits = ["banana", "apple", "manggo", "orange"];

for (let i = 0; i < fruits.length; i++) {
  let newText = document.createElement("p");
  newText.textContent = i + "." + fruits[i];
  document.body.appendChild(newText);
}

// contoh while
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
// contoh while dan do/while
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

// ######################################################################################################
// membuat bintang
function fungsi3() {
  var ulangi = confirm("apakah anda ingin mengulang?");
  var counter = 0;
  console.log("\n");

  while (ulangi) {
    counter++;
    console.log(counter + ": " + "*".repeat(counter) + "\n");

    var bintang = "*".repeat(counter) + "<br>";
    var newText = document.createElement("small");
    newText.innerHTML = counter + ": " + bintang;
    document.body.appendChild(newText);
    var ulangi = confirm("apakah anda ingin mengulang?");
  }
}

var btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", fungsi3);

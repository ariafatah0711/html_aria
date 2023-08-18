// #####################################################################################################
// percabangan if
var angka = 10;
if (angka > 5) {
  console.log("angka ini lebih besar dari 10");
}

// percabangan else
angka = 11;
if (angka / 2 == 0) {
  console.log("ini adalah angka genap");
} else {
  console.log("ini adalah angka ganjil");
}

// percabangan if else, if else
angka = 5;
if ((angka = 5)) {
  console.log("ini adalah angka 5");
} else if (angka < 5) {
  console.log("angka lebih kecil dari 5");
} else if (angka > 5) {
  console.log("angka lebih besar dari 5");
} else {
  console.log("ini bukan angka");
}

nama = "aria";
if (nama.length === 1) {
  console.log(nama + " memiliki 1 huruf");
} else if (nama.length === 2) {
  console.log(nama + " memiliki 2 huruf");
} else if (nama.length === 3) {
  console.log(nama + " memiliki 3 huruf");
} else if (nama.length === 4) {
  console.log(nama + " memiliki 4 huruf");
} else if (nama.length > 5) {
  console.log(nama + " memiliki huruf lebih dari 4");
} else {
  console.log("bukan huruf");
}

// percabangan switch
var day = "minggu";
switch (day) {
  case "senin":
    console.log("ini adalah hari kerja");
    break;
  case "minggu":
    console.log("ini adalah hari minggu");
    break;
  default:
    console.log("hari tidak valid");
}

// percabangan ternary
var umur = 18;
var status = umur >= 18 ? "dewasa" : "anak - anak";

console.log(status);

// percabangan nested(bercabang)
var nilai = 85;
if (nilai >= 70) {
  if (nilai >= 90) {
    console.log("A");
  } else if (nilai >= 80) {
    console.log("B");
  } else {
    console.log("C");
  }
} else {
  console.log("tidak lulus");
}

// percabangan bersarang (switch di dalam if)
var umur = 16;
var izin = true;

if (izin) {
  switch (umur) {
    case 18:
      console.log("boleh masuk");
      break;
    default:
      console.log("tidak memenuhi syarat");
  }
} else {
  console.log("tidak di izinkan");
}

// multipe condisi (&& dan ||)
var nilaiUjian = 75;
var kehadiran = 85;

if (nilaiUjian >= 70 && kehadiran >= 80) console.log("anda lulus");
else console.log("anda tidak lulus");

// #####################################################################################################
function mulai1() {
  let newText = document.createElement("p");
  var greater = document.createElement("p");
  var less = document.createElement("p");
  greater.textContent = "kamu boleh masuk!";
  less.textContent = "kamu belum boleh masuk!";

  let umur = prompt("masukan umur mu", "");
  if (umur >= 18) {
    newText.innerHTML = "umur: " + umur;
    document.body.appendChild(newText);
    document.body.appendChild(greater);
  } else if (umur.length == 0) {
    newText.innerHTML = "umur; 0";
    document.body.appendChild(newText);
  } else if (umur <= 17) {
    newText.innerHTML = "umur: " + umur;
    document.body.appendChild(newText);
    document.body.appendChild(less);
  }
}

function mulai2() {
  var nilai = prompt("masukan nilai anda");
  var grade = "";

  if (nilai >= 90) grade = "A";
  else if (nilai >= 80) grade = "B";
  else if (nilai >= 70) grade = "c+";
  else if (nilai >= 60) grade = "C";
  else if (nilai >= 50) grade = "D+";
  else if (nilai >= 40) grade = "D";
  else if (nilai >= 30) grade = "E";
  else grade = "F";

  var paragraph = document.createElement("p");
  paragraph.innerHTML = "grade: " + grade;
  document.body.appendChild(paragraph);
}

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

button1.addEventListener("click", mulai1);
button2.addEventListener("click", mulai2);

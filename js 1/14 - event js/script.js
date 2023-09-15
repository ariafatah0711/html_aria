// button
function hello() {
  alert("hello world");
}

const btnlogin = document.getElementById("hello-ariafatah0711");
btnlogin.addEventListener("click", function () {
  alert("hello ariafatah0711");
});

document.getElementById("btn-one").addEventListener("click", function () {
  alert("click satu kali");
});
document.getElementById("btn-double").addEventListener("dblclick", function () {
  alert("click dua kali");
});

// mouse
const btnEnter = document.getElementById("btn-enter");
const btnHover = document.getElementById("btn-hover");
const btnOut = document.getElementById("btn-out");

btnEnter.addEventListener("mouseenter", function (event) {
  event.target.innerText = "mouse sudah masuk";
});

btnOut.addEventListener("mouseout", function (event) {
  event.target.innerText = "mouse sudah keluar";
});

btnHover.addEventListener("mouseover", function (event) {
  event.target.innerText = "mouse sudah di atas element";
});

// keyboard
const keydown = document.getElementById("keydown");
const pressed = document.getElementById("pressed");
const keyup = document.getElementById("keyup");

document.addEventListener("keydown", function (event) {
  keydown.innerText = `menekan: ${event.key}`;
});

document.addEventListener("keypress", function (event) {
  pressed.innerText = `menahan: ${event.key}`;
});

document.addEventListener("keyup", function (event) {
  keyup.innerText = `melepas: ${event.key}`;
});

// change
const buah = document.getElementById("buah");
const info = document.getElementById("info");

buah.addEventListener("change", function (e) {
  info.innerText = `anda memilih: ${e.target.value}`;
});

// ######################################################################################################
// custom event
// membuat object untuk custom event
const namaObjectEvent = new Event("nama-event");

// mendengarkan event
domObject.addEventListener("nama-event", function () {});

// memicu atau triger event
domObject.dispatchEvent(namaObjectEvent);
// atau bisa juga di triger pada object window dan document
window.dispatchEvent(namaObjectEvent);
document.dispatchEvent(namaObjectEvent);

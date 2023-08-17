// #######################################################################################################
// jendela dialog

// 1. alert
function result_1() {
  window.alert("ini adalah pesan alert");
  alert("yang telah dihubungkan ke id button");
}
// result_1();

// 2. confirm
function result_2() {
  var yakin = confirm("apakah anda ingin menambahkan paragraph");
  if (yakin) {
    // document.write(
    //   "<p>ini adalah paragraph, dan dapat ditampilkan hanya jika pengguna mengetik ok</p>"
    // );
    let newText = document.createElement("p");
    newText.textContent =
      "ini adalah paragraph, dan dapat ditampilkan hanya jika pengguna mengetik ok";
    document.body.appendChild(newText);
  } else {
    //
  }
}
// result_2();

// 3. prompt
function result_3() {
  var inputValue = prompt("siapa nama anda: ");
  if (inputValue !== null) {
    // document.write("<p>halo <b>" + inputValue + "</b> salam kenal</p>");
    let newText = document.createElement("p");
    newText.innerHTML = "halo <b>" + inputValue + "</b>, salam kenal";
    document.body.appendChild(newText);
  } else {
    //
  }
}
// result_3();

// #######################################################################################################
// menghubungkan fungsi pada button

var button_1 = document.getElementById("alert");
var button_2 = document.getElementById("confirm");
var button_3 = document.getElementById("prompt");

button_1.addEventListener("click", result_1);
button_2.addEventListener("click", result_2);
button_3.addEventListener("click", result_3);

// #######################################################################################################
// remove text terakhir
function resultRemove() {
  var paragraphs = document.querySelectorAll("p");
  if (paragraphs.length > 0) {
    paragraphs[paragraphs.length - 1].remove();
  }
}

var button_remove = document.getElementById("remove");

button_remove.addEventListener("click", resultRemove);

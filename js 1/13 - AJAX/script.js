// membuat object AJAX
var xhr = new XMLHttpRequest();
var url = "https://api.github.com/users/ariafatah0711";

/* 

// menentukan fungsi handler untuk event
xhr.onreadystatechange = function () {};
xhr.onload = function () {};
xhr.onerror = function () {};
xhr.onprogress = function () {};

// menentukan method dan URL
xhr.open("GET", url, true);

// mengirim request
xhr.send();
*/

// ######################################################################################################

// onloadstart => saat permintaan dimulai
xhr.onloadstart = function () {
  console.log("permintaan dimulai");
};

// onload => saat permintaan berhasil
xhr.onload = function () {
  if (this.status == 200) {
    // Respon berhasil diterima
    var data = xhr.responseText;
    console.log(data);
  }
};

// onerror => saat permintaan gagal/error
xhr.onerror = function () {
  console.log("terjadi kesalahan");
};

// onloadend => saat permintaan selesai baik gagal/berhasil
xhr.onloadend = function () {
  console.log("permintaan selesai");
};

// ######################################################################################################
// onreadystatechange => menangani perubahan dengan menggunakan "readyState"
xhr.onreadystatechange = function () {
  if (this.readyState === XMLHttpRequest.DONE) {
    if (this.status === 200) {
      // respons berhasil diterima
      var data = this.responseText;
      console.log(data);
    } else {
      console.log("terjadi kesalahan" + xhr.status);
    }
  }
};

// onprogess => selama proses pengirim / penerimaan dan dapat menampilkan indikator loading dan persen
xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    var percentCompleate = (event.loaded / event.total) * 100;
    console.log("proges: " + percentCompleate + "%");
  }
};

// onabort => untuk membatalkan permintaan dengan "abort()""
xhr.onabort = function () {
  xhr.abort(); // permintaan yang sedang berlangusung akan diberhentikan secara paksa
  console.log("permintaan dibatalkan");
};

// timeout => mengatur waktu maksimal timeout
xhr.timeout = function () {
  console.log("waktu permintaan habis");
};

// ######################################################################################################
// mengirim permintaan http ke server

// metode open() digunakan untuk menginisialisasi permintaan http
xhr.open("GET", url, true);

// method : "GET", "POST", "PUT", "DELETE"
// url : url tujuan target yang akan diminta
// async : nilai bolean yang akan menentukan permintaan akan dilakukan secara asinkron(true) atau sinkron(false)

// metode send() digunakan untuk mengirim permintaan http ke server setelah permintaan telah diinisialisasi dengan xhr.opem()
xhr.send();

// parameter data(opsional) adalah data yang akan dikirim ke server. : "POST"

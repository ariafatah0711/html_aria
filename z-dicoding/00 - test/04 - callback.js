// setTimeout
console.log("selamat datang");

setTimeout(() => {
  // block atau statement ini akan di jalankan
  // ketika sudah 10 detik
  console.log("sampai jumpa lagi");
}, 5000);

console.log("ada yang bisa saya bantu??"); // akan jalan terlebih dahulu
console.log("buatkan saya kue");

// callback
const getCake = (callback) => {
  let cake = null;
  console.log("Sedang membuat kue, silakan tunggu ....");

  setTimeout(() => {
    cake = "Kue Selesai!";
    callback(cake);
  }, 3000);
};

getCake((cake) => {
  console.log(cake);
});

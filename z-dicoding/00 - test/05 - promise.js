// promise => janji menggunakan .then
// pending => janji dalam proses
// fullfilled => janji terpenuhi
// rejected => janji gagal terpenuhi

// resolve() merupakan parameter pertama pada executor function.
// Parameter ini merupakan fungsi yang dapat menerima satu parameter,
// biasanya kita gunakan untuk mengirimkan data ketika promise berhasil dilakukan.
// Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi fulfilled.

// reject() merupakan parameter kedua pada executor function.
//  Parameter ini merupakan fungsi yang dapat menerima satu parameter
// yang digunakan untuk memberikan alasan mengapa Promise tidak dapat terpenuhi.
// Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi rejected.

// Executor function akan berjalan secara asynchronous hingga akhirnya kondisi Promise berubah dari pending menjadi fulfilled/rejected.

let executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;

  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!");
  }
};

const handlerSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const makeCoffee = new Promise(executorFunction);

console.log(makeCoffee); // masih merupakan janji
makeCoffee.then(handlerSuccess); // sudah menjadi value // jika semisal ini adalah false atau reject itu akan error

// untuk mengatasi ini kita dapat menggunakan 2 callback yaitu onFullFilled dan onRejected
const handlerRejected = (rejectionReason) => {
  console.log(rejectionReason);
};
makeCoffee.then(handlerSuccess, handlerRejected); // sekarang sudah bisa melakukan callback saat reject maupun fullFilled

// --------------------------------------------------------------------------------------
executorFunction = (resolve, reject) => {
  const isTeaMakerReady = false;

  if (isTeaMakerReady) {
    resolve("Tea berhasil dibuat");
  } else {
    reject("Mesin Tea tidak bisa digunakan!");
  }
};

// namun agar lebih mudah kita bisa gunakan catch
makeTea = new Promise(executorFunction);
makeTea
  .then(handlerSuccess)

  .then(null, handlerRejected) // ini perlu memanggil null, onRejected
  .catch(handlerRejected); // ini adalah catch agar lebih mudah tidak perlu memanggil null

/* ---- state = status -----*/
const state = {
  isCoffeMakerCoffeMakerReady: true,
  seedStock: {
    arabica: 250,
    robusta: 60,
    librerica: 80,
  },
};

/* ---- getSeed => mengambil biji -----*/
const getSeed = (type, miligrams) => {
  return new Promise((resolve, reject) => {
    if (state.seedStock[type] >= miligrams) {
      state.seedStock[type] -= miligrams;
      resolve("biji kopi didapatkan");
    } else {
      reject("maaf stock kopi habis");
    }
  });
};

/* ---- makeCoffee => mengambil biji dan membuat coffee -----*/
const makeCoffee = (seed) => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeMakerCoffeMakerReady) {
      resolve("kopi berhasil dibuat");
    } else {
      reject("maaf mesin tidak dapat digunakan");
    }
  });
};

/* ---- servingToTable => menaruh coffe di meja -----*/
const servingToTable = (coffee) => {
  return new Promise((resolve) => {
    resolve("pesanan kopi sudah selesai");
  });
};

/* fuction pesanan */
function reserveACoffee(type, miligrams) {
  getSeed(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)

    .then((resolvedValue) => console.log(resolvedValue))
    .catch((rejectedReason) => console.log(rejectedReason));
}

/* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
reserveACoffee("librerica", 100); // stock kopi habis

reserveACoffee("arabica", 120); // pesanan kopi sudah selesai
reserveACoffee("robusta", 50);

// mesin kopi rusak
setTimeout(() => {
  state.isCoffeMakerCoffeMakerReady = false;
  reserveACoffee("arabica", 120);
}, 200);

function samplePromise() {
  return Promise.resolve("aria");
}

// const name = await samplePromise();
// console.log(name); // error karena await hanya bisa digunakan jika function async

// jadi jika ingin menjalankan nya kita bisa gunakan
// function asynch pada sample promise
// atau ubah nama file jadi .mjs

async function run() {
  const nama = await samplePromise();
  console.log(nama);
}

run();

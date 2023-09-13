// ###################################################################################################
// JQuery
// load data ke elemen tertentu via AJAX
$(Selector).load(URL, data, callback);

// ambil data dari server
$.get(URL, callback);

// kirim data dari server
$.post(URL, data, callback);

// ###################################################################################################
// fetch
fetch("http://example.com/movies/.json")
  .then(function (response) {
    return response.json;
  })
  .then(function (myJson) {
    console.log(JSON.stringify(myJson));
  });

fetch(url, {
  method: "POST", // GET, POST, PUT, DELETE, etc
  mode: "cors", // no-cors, cors, *same-origin
  chace: "no-chache", // *default, no-chache, reload, force-chace, only-if-chaced
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-type": "application/json",
    "Content-type": "application/x-www-form-urlencoded",
  },
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // no-referrer, *client
  body: JSON.stringify(data), // body data type must match "Content-type" header
}).then((response) => response.json()); // parser JSON response into native javascript object

// penggunaan
fetch("https://api.example.com/data")
  .then((response) => {
    // response
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json; // if true response atau jika benar diresponse
  })
  .then((data) => {
    console.log(data); // melakukan sesuatu dengan data yang diterima
  })
  .catch((error) => {
    console.error("there was a problem with the fetch operation", error);
  });

// ###################################################################################################3
// axios
axios.get("https://jsonplaceholder.typicode.com/posts");

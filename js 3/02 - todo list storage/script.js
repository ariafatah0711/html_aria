const div = document.getElementById("container");
const key = "DATA";
let data;

function asynchData(method, value, status) {
  switch (method) {
    case "get":
      data = localStorage.getItem(key);
      data = JSON.parse(data);
      break;
    case "post":
      if (!localStorage.getItem(key)) {
        data = {};
      } else {
        data = localStorage.getItem(key);
        data = JSON.parse(data);
      }
      data[dataItem.id] = dataItem;
      localStorage.setItem(key, JSON.stringify(data));
      break;
    case "remove":
      delete data[value];
      localStorage.setItem(key, JSON.stringify(data));
      break;
    default:
  }
}

function showData() {
  console.log(data);
  for (element in data) {
    const judul = data[element].judul;
    const penulis = data[element].penulis;
    const item = document.createElement("li");
    item.id = data[element].id;
    item.innerHTML = `
      <span>${judul}</span>
      <span>${penulis}</span>
      <span onclick="removeItem(this)">X</span>
    `;
    // div.appendChild(item);
    div.insertAdjacentHTML("afterbegin", item.outerHTML);
  }
}

function addItem() {
  const judul = document.getElementById("judul").value;
  const penulis = document.getElementById("penulis").value;
  dataItem = {
    id: +new Date(),
    judul: judul,
    penulis: penulis,
  };
  asynchData("post", dataItem);
}

function removeItem(element) {
  // console.log(element);

  var parentElement = element.parentNode.id;
  // console.log(parentElement);

  asynchData("remove", parentElement);
  location.reload();
}

document.querySelector("form[name=inputData]").onsubmit = function (event) {
  addItem();
  document.forms["inputData"].reset();
};

asynchData("get");
showData();

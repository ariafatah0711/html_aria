// navbar
let navbar = document.querySelector(`.navbar`);

document.querySelector(`#menu-btn`).onclick = () => {
  navbar.classList.toggle(`active`);

  searchForm.classList.remove(`active`);
  cartItem.classList.remove(`active`);
};

// search
let searchForm = document.querySelector(`.search-form`);

document.querySelector(`#search-btn`).onclick = () => {
  searchForm.classList.toggle(`active`);

  navbar.classList.remove(`active`);
  cartItem.classList.remove(`active`);
};

// cart items
let cartItem = document.querySelector(`.cart-items-container`);

document.querySelector(`#cart-btn`).onclick = () => {
  cartItem.classList.toggle(`active`);

  navbar.classList.remove(`active`);
  searchForm.classList.remove(`active`);
};

// scroll
window.onscroll = () => {
  navbar.classList.remove(`active`);
  searchForm.classList.remove(`active`);
  cartItem.classList.remove(`active`);
};

// #######################################################################################################
// anchor tag reset
if (window.location.hash) {
  history.replaceState(null, null, window.location.href.split("#")[0]);
}

// unchecked navbar
function uncheckCheckbox() {
  const checkbox = document.getElementById("check");
  checkbox.checked = false;
}

// scroll link anchor
// document.getElementById("link1").addEventListener("click", function (event) {
//   event.preventDefault(); // mencegah aksi bawahan link
//   window.scrollBy(0, window.innerHeight * 2);
//   window.location.href = this.getAttribute("href"); //pergi ke tautan setelah scroll
// });

// smooth scroll
// const links = document.querySelectorAll("anchor-link");

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const targetId = link.getAttribute("href");
//     const targetElement = document.querySelector(targetId);
//     targetElement.scrollIntoView({ behavior: "smooth" });
//   });
// });

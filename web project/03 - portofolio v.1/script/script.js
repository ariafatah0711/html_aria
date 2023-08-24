// #######################################################################################################
// anchor tag reset
if (window.location.hash) {
  //   window.locatioon.href = window.location.href.split("#")[0];
  history.replaceState(null, null, window.location.href.split("#")[0]);
}

// header static to fixed
const headers = document.querySelectorAll(".header");

function adjustZIndex(index) {
  console.log("a");
  headers.forEach((header, i) => {
    if (i === index) {
      console.log("a");
      header.stylezIndex = "10";
    } else {
      console.log("a");
      header.stylezIndex = "1";
    }
  });
}

document.addEventListener("scroll", () => {
  headers.forEach((header, index) => {
    const section = document.querySelector("#section-${index + 1}");
    if (section.getBoundingClientRect().top <= 0) {
      adjustZIndex(index);
    }
  });
});

// smooth scroll
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

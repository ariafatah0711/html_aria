// #######################################################################################################
// anchor tag reset
if (window.location.hash) {
  //   window.locatioon.href = window.location.href.split("#")[0];
  history.replaceState(null, null, window.location.href.split("#")[0]);
}

const sections = document.querySelectorAll("section");
const headers = document.querySelectorAll(".header");

function setActiveHeader(index) {
  headers.forEach((header, i) => {
    if (i === index) {
      header.style.display = "flex";
    } else {
      header.style.display = "none";
    }
  });
}

document.addEventListener("scroll", () => {
  let activeSectionIndex = 0;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= 0) {
      activeSectionIndex = index;
    }
  });
  setActiveHeader(activeSectionIndex);
});

// header static to fixed
// const headers = document.querySelectorAll(".header");

// function adjustZIndex(index) {
//   headers.forEach((header, i) => {
//     if (i === index) {
//       header.style.zIndex = "10";
//     } else {
//       header.style.zIndex = "1";
//     }
//   });
// }

// document.addEventListener("scroll", () => {
//   headers.forEach((header, index) => {
//     const section = document.querySelector("#section-${index + 1}");
//     if (section.getBoundingClientRect().top <= 0) {
//       adjustZIndex(index);
//     }
//   });
// });

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

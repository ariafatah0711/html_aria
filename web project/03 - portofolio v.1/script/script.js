// #######################################################################################################
// anchor tag reset
if (window.location.hash) {
  //   window.locatioon.href = window.location.href.split("#")[0];
  history.replaceState(null, null, window.location.href.split("#")[0]);
}

// header static to fixed
const staticDiv = document.querySelector(".static-div");
const section2 = document.querySelector("#section-2");

function handleScroll() {
  if (section2.getBoundingClientRect().top <= 0) {
    staticDiv.classList.remove("static-div");
    staticDiv.classList.add("fixed-div");
  } else {
    staticDiv.classList.remove("fixed-div");
    staticDiv.classList.add("static-div");
  }

  window.addEventListener("scroll", handleScroll);
}

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

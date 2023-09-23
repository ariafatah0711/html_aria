const carousel = document.querySelector(".carousel");
const firstCarouselContent = carousel.querySelectorAll(".carousel-content")[0];
const carouselContents = carousel.querySelectorAll(".carousel-content");
const arrowIcons = document.querySelectorAll(".wrapper i");

let isAnimating = false;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (!isAnimating) {
      isAnimating = true;
      let firstCarouselContentWidth = firstCarouselContent.clientWidth; // getting first img width & adding 14 margin value
      // if click icon is left, reduce value from the carousel scroll left, else add to it
      carousel.scrollLeft +=
        icon.id == "left"
          ? -firstCarouselContentWidth
          : firstCarouselContentWidth;
    }
    setTimeout(() => {
      isAnimating = false;
    }, 300);
  });
});

function resetCarousel() {
  carousel.scrollLeft = 0;
}

window.addEventListener("resize", resetCarousel);
window.addEventListener("DOMContentLoaded", () => {
  resetCarousel();
});

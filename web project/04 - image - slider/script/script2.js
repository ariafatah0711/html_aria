const carousel = document.querySelector(".carousel");
firstCarouselContent = carousel.querySelectorAll(".carousel-content")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstCarouselContentWidth = firstCarouselContent.clientWidth; // getting first img width & adding 14 margin value
    // if click icon is left, reduce value from the carousel scroll left, else add to it
    carousel.scrollLeft +=
      icon.id == "left"
        ? -firstCarouselContentWidth
        : firstCarouselContentWidth;
  });
});

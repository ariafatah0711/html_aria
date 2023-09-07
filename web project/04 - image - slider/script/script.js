const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if click ison is left, reduce balue from the carousel scroll left, else add to it
    carousel.scrollLeft += icon.id == "left" ? firstImgWidth : firstImgWidth;
  });
});

const DragStart = (e) => {
  // updating global variable value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragstop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", DragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop);

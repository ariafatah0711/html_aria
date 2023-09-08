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


const carousel = document.querySelector(".carousel");
const carouselContents = carousel.querySelectorAll(".carousel-content");
const arrowIcons = document.querySelectorAll(".wrapper i");

// Fungsi untuk mengatur jumlah elemen per baris berdasarkan lebar layar
function setElementsPerRow() {
  const screenWidth = window.innerWidth;
  let elementsPerRow = 3; // Jumlah elemen per baris default

  if (screenWidth <= 900) {
    elementsPerRow = 2; // Mengubah menjadi 2 elemen per baris saat lebar layar <= 900px
  }

  if (screenWidth <= 550) {
    elementsPerRow = 1; // Mengubah menjadi 1 elemen per baris saat lebar layar <= 550px
  }

  // Mengatur lebar elemen berdasarkan jumlah elemen per baris
  const elementWidth = 100 / elementsPerRow;
  carouselContents.forEach((content) => {
    content.style.width = `${elementWidth}%`;
  });
}

// Panggil fungsi setElementsPerRow() saat halaman dimuat dan saat window diubah ukurannya
window.addEventListener("DOMContentLoaded", setElementsPerRow);
window.addEventListener("resize", setElementsPerRow);

// Event listener untuk tombol panah (sama seperti sebelumnya)
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstCarouselContentWidth = carouselContents[0].clientWidth;
    carousel.scrollLeft +=
      icon.id == "left" ? -firstCarouselContentWidth : firstCarouselContentWidth;
  });
});

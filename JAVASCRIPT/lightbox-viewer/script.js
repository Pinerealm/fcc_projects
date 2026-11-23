const lightbox = document.querySelector(".lightbox");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightboxImage = lightbox.querySelector("img");

galleryItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const imgSrc = e.target.src.replace("-thumbnail", "");
    lightboxImage.src = imgSrc;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

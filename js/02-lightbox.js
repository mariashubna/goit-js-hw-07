import { galleryItems } from "./gallery-items.js";
// Change code below this line
document.addEventListener("DOMContentLoaded", function () {
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
function createMarkup(items) {
  return items
    .map(
      (item, index) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-index="${index}" />
    </a>
 </li>
    `
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
});

import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);
function createMarkup(items) {
  return items
  .map(
    (item, index) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-index="${index}" />
    </a>
 </li>
    `)
    .join("");
}

function handleClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const index = Number(event.target.getAttribute('data-index'));
        const image = galleryItems[index].original;
    
        const lightbox = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250, 
          });
  }
}


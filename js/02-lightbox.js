import { galleryItems } from './gallery-items.js';
// Change code below this line

// ----------------------------Формуємо розмітку-------------------------------------------
const getGalleryAlt = document.querySelector("description")
console.log(galleryItems)

const getGalleryRef = document.querySelector(".gallery");
const addGalleryPictures = galleryItems.map(({ preview, original, description }) => {
    console.log(description)
    return `<a class="gallery__item" href=${original}>
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>`;
}).join("");


// ----------------------------Рендеримо розмітку-------------------------------------------

getGalleryRef.innerHTML = addGalleryPictures;


// ----------------------------Скидаємо всю роботу на simplelightbox -------------------------------------------
new SimpleLightbox('.gallery a', {
    scrollZoom: true,
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});


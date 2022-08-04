import { galleryItems } from './gallery-items.js';

const getGalleryRef = document.querySelector(".gallery");

// ----------------------------Формуємо розмітку-------------------------------------------

const addGalleryPictures = galleryItems.map(({ preview, original, description }) => {
     return  `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}).join(" ");

// ----------------------------Рендеримо розмітку-------------------------------------------

getGalleryRef.innerHTML = addGalleryPictures;

// ----------------------------Скидаємо дефолтні властивості-------------------------------------------

function blockDefaultEvents (event) {
  event.preventDefault();
}
  // ----------------------------Відкриваємо з допомогою LightBox-------------------------------------------

getGalleryRef.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
  // console.log(event.currentTarget);
  blockDefaultEvents (event)
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    const urlImg = event.target.dataset.source;
      const instance = basicLightbox.create(`
      <img src= "${urlImg}" width="800" height="600">
      `)
  instance.show();

  // ----------------------------Закриваємо зображення кнопкою Esc-------------------------------------------
  getGalleryRef.addEventListener("keydown", btnClose);

  function btnClose(event) {
  
  if (event.code === "Escape") {
    instance.close();
    
  }
}
}

// console.log(galleryItems);
// console.table(galleryItems);
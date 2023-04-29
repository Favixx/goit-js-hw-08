// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryList = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(el => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
    </a>
    </li>`
).join('');
galleryList.innerHTML = galleryItemsMarkup;


const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionsPosition: 'bottom'
});
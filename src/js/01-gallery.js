import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}" ><img class="gallery__image" src="${preview}" alt="${description}" /></a>
    </li>`
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);

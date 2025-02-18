import { fetchImages } from './modules/api.js';
import { displayImages, clearGallery, removeLastImage, reverseGallery } from './modules/gallery.js';

const galleryContainer = document.getElementById('galleryContainer');
let images = [];

async function initGallery() {
    images = await fetchImages();
    displayImages(images.slice(0, 4), galleryContainer);
}

document.querySelector('.buttons button:nth-child(1)').addEventListener('click', () => {
    const currentImages = galleryContainer.children.length;
    const newImages = images.slice(currentImages, currentImages + 4);
    if (newImages.length) {
        displayImages(newImages, galleryContainer);
    } else {
        alert('Більше зображень немає');
    }
});

document.querySelector('.buttons button:nth-child(2)').addEventListener('click', () => clearGallery(galleryContainer));
document.querySelector('.buttons button:nth-child(3)').addEventListener('click', () => removeLastImage(galleryContainer));
document.querySelector('.buttons button:nth-child(4)').addEventListener('click', () => reverseGallery(galleryContainer));


initGallery();

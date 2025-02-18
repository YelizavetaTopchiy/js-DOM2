export function displayImages(imageArray, container) {
    imageArray.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `${image.download_url}?w=300&h=200`;
        imgElement.alt = `Зображення від ${image.author}`;
        container.appendChild(imgElement);
    });
}

export function clearGallery(container) {
    container.innerHTML = '';
}

export function removeLastImage(container) {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

export function reverseGallery(container) {
    const allImages = Array.from(container.children);
    container.innerHTML = '';
    allImages.reverse().forEach(img => container.appendChild(img));
}

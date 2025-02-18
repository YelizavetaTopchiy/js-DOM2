export async function fetchImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Помилка завантаження зображень:', error);
        return [];
    }
}

import {generatePhotos} from './data.js';
import {generateThumbnails} from './thumbnail.js';

generateThumbnails(generatePhotos())
const photoArray = generatePhotos(); // Генерируем массив фотографий.
console.log(photoArray); // Выводим массив фотографий в консоль.


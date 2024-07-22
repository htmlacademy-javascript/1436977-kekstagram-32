// Функция getRandomInt(min, max) возвращает случайное целое число в диапазоне от min до max включительно.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция getRandomElement(arr) возвращает случайный элемент из массива arr.
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export {getRandomInt, getRandomElement}; //Экспортируем функции в файл util.js

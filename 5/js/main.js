const name = ['Илья', 'Таня', 'Настя', 'Наташа', 'Костя'];

const getRandomComment = [
  'Всё отлично!, В целом всё неплохо, Но не всё', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра', 'В конце концов это просто непрофессионально', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const letDescription = [
  'работаю дома', 'чилю на диване', 'Катаюсь на роликах', 'занимаюсь в тренажерном зале'
];

/**
 * Данная функция создает массив объектов в кол-ве 25шт
 */
const makePhotos = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result[i] = makeObject(i + 1);
  }
  return result;
};
makePhotos(25);

/**
 * Создаем нужное число id в рандомном порядке
 */

function getRandomId(min, max) {
  const minId = Math.ceil(min);
  const maxId = Math.floor(max);
  return Math.floor(Math.random() * (maxId - minId) + minId);
}
getRandomId (1, 25);

/**
 * Создаем нужное число url в рандомном порядке
 */
function getRandomUrl(min, max) {
  const minUrl = Math.ceil(min);
  const maxUrl = Math.floor(max);
  return Math.floor(Math.random() * (maxUrl - minUrl) + minUrl);
}
getRandomUrl (1, 25);

/**
 * Создаем отдельную функцию для получения отдельного рандомного числа
 */
function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomInteger();


const randomAvatarNumber = getRandomInteger(1, 6);

function getRandomElementFromArray (element) {
  return element[getRandomInteger(0, element.length - 1)];
}



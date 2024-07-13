const name = ['Илья', 'Таня', 'Настя', 'Наташа', 'Костя'];

const getRandomComment = [
  'Всё отлично!, В целом всё неплохо, Но не всё', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра', 'В конце концов это просто непрофессионально', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const letDescription = [
  'работаю дома', 'чилю на диване', 'Катаюсь на роликах', 'занимаюсь в тренажерном зале'
];


/**
 * Создаем объект с нужными ключами
 */

const makeObject = (idx) => ({
  id: getRandomId(),
  url: getRandomUrl(),
  description: 'ad',
  likes: 213,
  comments: 23
});

makeObject();

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
  return Math.floor(Math.random() * (maxId - minId) + minId); // The maximum is exclusive and the minimum is inclusive
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

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// const createComment = () => (
//   {
//     id: generateRandomId(),
//     avatar: img/avatar-${getRandomInteger(minAvatarCount, maxAvatarCount)}.svg,
//     message: 'В целом всё неплохо. Но не всё.',
//     name: getRandomArrayElement (names),
//   })

import {getRandomInt, getRandomElement} from './util.js';

// Функция generateComments() создает массив случайных комментариев.
function generateComments() {
  const comments = []; // Массив для хранения комментариев.
  const commentMessages = [ // Возможные сообщения для комментариев.
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const names = ['Артём', 'Иван', 'Ольга', 'Мария', 'Дмитрий', 'Елена']; // Возможные имена авторов комментариев.

  const commentCount = getRandomInt(0, 30); // Случайное количество комментариев от 0 до 30.
  for (let i = 0; i < commentCount; i++) {
    comments.push({
      id: getRandomInt(1, 1000), // Случайный идентификатор комментария.
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`, // Случайный аватар.
      message: getRandomElement(commentMessages), // Случайное сообщение.
      name: getRandomElement(names) // Случайное имя автора.
    });
  }
  return comments; // Возвращаем массив комментариев.
}

// Функция generatePhotos() создает массив из 25 объектов, описывающих фотографии.
function generatePhotos() {
  const photos = []; // Массив для хранения фотографий.
  const descriptions = [ // Возможные описания для фотографий.
    'Прекрасный вид на закат.',
    'Удивительное утро в горах.',
    'Незабываемый вечер на пляже.',
    'Городские огни ночью.',
    'Тихий лесной пейзаж.',
    'Красота природы в каждом кадре.'
  ];

  const usedIds = new Set(); // Множество для хранения использованных идентификаторов.
  while (photos.length < 25) {
    const id = getRandomInt(1, 25); // Случайный идентификатор от 1 до 25.
    if (!usedIds.has(id)) { // Проверяем, не был ли этот идентификатор уже использован.
      usedIds.add(id); // Добавляем идентификатор в множество использованных.
      photos.push({
        id: id, // Уникальный идентификатор фотографии.
        url: `photos/${id}.jpg`, // Уникальный URL фотографии.
        description: getRandomElement(descriptions), // Случайное описание.
        likes: getRandomInt(15, 200), // Случайное количество лайков от 15 до 200.
        comments: generateComments() // Случайные комментарии.
      });
    }
  }
  return photos; // Возвращаем массив фотографий.
}

export {generatePhotos};


const pictureCount = 25;
const minLike = 15
const maxLike = 200
const minCommentCount = 0
const maxCommentCount = 30
const minAvatarCount = 1
const maxAvatarCount = 6
const names = ['Илья', 'Таня', 'Настя', 'Наташа', 'Костя']

let commentLines = [
  'Всё отлично!, В целом всё неплохо, Но не всё', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра', 'В конце концов это просто непрофессионально', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const description = [
  'работаю дома', 'чилю на диване', 'Катаюсь на роликах', 'занимаюсь в тренажерном зале'
];

const getRandomArrayElement = (items) =>
  items [getRandomInteger(0, items.length - 1)]



const getPictureCount = Array.from({length: picterCount}, (element, index) => creatPicters(index + 1));

const createGenerator = () => {

  let number = 0
  return () => {
    numberId += 1
    return numberId
  }
}

const getRandomInteger = (a, b) => {

  const lower = Math.ceil(Math.min(a, b))
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
}

const generateRandomId = createGenerator()

const createMessage = () => Array.from({length: getRandomInteger (1, 2)}, () => getRandomArrayElement(commentLines),)

const createComment = () => (
  {
    id: generateRandomId(),
    avatar: `img/avatar-${getRandomInteger(minAvatarCount, maxAvatarCount)}.svg`,
    message: 'В целом всё неплохо. Но не всё.',
    name: getRandomArrayElement (names),
  })

const creatPicture = (index) => ({
  id: `photos/${{index}}.jpg`,
  url: '',
  description: getRandomArrayElement (description),
  likes: getRandomInteger (minLike, maxLike),
  comments: Array.from({length: getRandomInteger (minCommentCount, maxCommentCount)}, createComment)
});

const getPictures = () => Array.from(
  {length: pictureCount},
  (_, index) => creatPicture(index + 1)
)

getPictures()

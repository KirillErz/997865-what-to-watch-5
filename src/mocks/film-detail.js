const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const FILMS = [`sagebrush-trail`, `santa-claus-conquers-the-martians`, `the-dance-of-life`, `the-great-flamarion`, `the-man-with-the-golden-arm`];

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


const generateFilmName = () => {
  const randomIndex = getRandomInteger(0, FILMS.length - 1);
  return FILMS[randomIndex];
};

const generateDescription = () => {
  const arrDescription = DESCRIPTION.split(`.`);
  const count = getRandomInteger(0, arrDescription.length);
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(arrDescription[i]);
  }
  return arr.join();
};

const reviewsArr = [
  {
    "id": 123,
    "author": `Ilya O'Reilly`,
    "reviews": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "rating": 8.9,
  },
  {
    "id": 1234,
    "author": `Ilya O'Reilly`,
    "reviews": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "rating": 7,
  }
];

export default {
  id: 1234,
  reviews: reviewsArr,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  filmInfo: {
    title: generateFilmName(),
    alternativeTitle: `Laziness Who Sold Themselves`,
    totalRating: getRandomInteger(1, 10),
    countRatings: getRandomInteger(1, 300),
    poster: `../img/bg-the-grand-budapest-hotel.jpg`,
    cover: `../img/the-grand-budapest-hotel-poster.jpg`,
    director: `Tom Ford`,
    writers: [
      `Takeshi Kitano`, `Takeshi Kitano`
    ],
    starring: [
      `Morgan Freeman`
    ],
    release: {
      date: 2025,
    },
    runtime: 73,
    genre: `Drama`,
    description: generateDescription(),
  },
  userDetails: {
    watchlist: Boolean(getRandomInteger(0, 1)),
  }
};

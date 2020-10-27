const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateRatingFilm = () => {
  return {rating: getRandomInteger(1, 100)};
};

const generateIdReviews = () => {
  const randomIndex = getRandomInteger(0, 100);
  return randomIndex;
};

export default [
  {
    "id": generateIdReviews(),
    "author": `Ilya O'Reilly`,
    "reviews": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "rating": generateRatingFilm(),
  },
  {
    "id": generateIdReviews(),
    "author": `Ilya O'Reilly`,
    "reviews": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "rating": generateRatingFilm(),
  },
  {
    "id": generateIdReviews(),
    "author": `Ilya O'Reilly`,
    "reviews": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "rating": generateRatingFilm(),
  },
  {
    "id": generateIdReviews(),
    "author": `Ilya O'Reilly`,
    "reviews": `a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`,
    "date": `2019-05-11T16:12:32.554Z`,
    "rating": generateRatingFilm(),
  }
];

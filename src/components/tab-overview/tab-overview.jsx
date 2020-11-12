import React, {Fragment} from "react";

const  Overview = (props) => {
  const {totalRating, countRatings, description, director, starring} = props

  const RatingEnumName = {
    3: `Bad`,
    5: `Normal`,
    8: `Good`,
    10: `Very good`,
    11: `Awesome`
  };

  const getNameRating = (rating) => {
    Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));
    return Object.values(Object.filter(RatingEnumName, ([name]) => name >= rating))[0];
  };

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{totalRating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getNameRating(totalRating)}</span>
          <span className="movie-rating__count">{countRatings} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </Fragment>
  );
}

export default Overview;

import React, {Fragment} from "react";

const Reviews = () => {

  return (
    <Fragment>
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{}</p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reviews;

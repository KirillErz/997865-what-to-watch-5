import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {film, onMovieCardHover} = props;
  const {
    id,
    title,
    poster
  } = film;
  return (
    <article onMouseOver={() => onMovieCardHover(film)} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};


SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  onMovieCardHover: PropTypes.func
};

export default SmallMovieCard;

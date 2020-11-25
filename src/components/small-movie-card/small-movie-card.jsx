import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

const SmallMovieCard = (props) => {

  const {film, video, onMouseOver, onMouseOut} = props;

  const {id, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="small-movie-card__image">
        <VideoPlayer
          video={video}
          film={film}
        />
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

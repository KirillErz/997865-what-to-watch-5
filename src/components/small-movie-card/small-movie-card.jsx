import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

class SmallMovieCard extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }



  render() {
    const {film} = this.props;
    const {isPlaying} = this.state;
    const {
      id,
      title,
      poster,
      src
    } = film;
    const properties = {
      muted: `muted`,
      width: 280,
      height: 175,
    }

    return (
      <article className="small-movie-card catalog__movies-card">
        <div onMouseOver={() => this.setState({isPlaying: !isPlaying})} onMouseOut={() => this.setState({isPlaying: !isPlaying})} className="small-movie-card__image">
          <VideoPlayer
            src={src}
            poster={poster}
            isPlaying={isPlaying}
            properties={properties}
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
        </h3>
      </article>
    );
  }
}


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

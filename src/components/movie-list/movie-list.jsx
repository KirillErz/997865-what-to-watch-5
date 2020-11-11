import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../small-movie-card/small-movie-card";


class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filmId: null
    };
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map(film => (
          <MovieCard
            key={film.id}
            film={film}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MovieList;

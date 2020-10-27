import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../small-movie-card/small-movie-card";


class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filmId: null
    };
    this.handleMovieCardHover = this.handleMovieCardHover.bind(this);
  }


  handleMovieCardHover({id}) {
    this.setState({
      filmId: id
    });
  }

  render() {
    const {films} = this.props;
    return (<div className="catalog__movies-list">
      {films.map((film) => (
        <MovieCard
          key={film.id}
          film={film}
          onMovieCardHover={this.handleMovieCardHover}
        />))}
    </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MovieList;

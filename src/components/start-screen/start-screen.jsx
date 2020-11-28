import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import ListGenres from "../list-genres/list-genres";
import ShowMore from "../show-more/show-more";
import {Link} from "react-router-dom";

const StartScreen = (props) => {
  const {moviesList, history, activeGenre, showMoviesCount, promo, handlerMoviefilter, handlerOnClickShowMore} = props;
  const {genre, releaseDate} = promo;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">

                <button onClick={() => history.push(`/player/:id`)} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListGenres
            activeGenre={activeGenre}
            handlerMoviefilter={handlerMoviefilter}
          />
          <MovieList
            showMoviesCount={showMoviesCount}
            moviesList={moviesList} />
          <div className="catalog__more">
            {showMoviesCount < moviesList.length ? (
              <ShowMore
                handlerOnClickShowMore={handlerOnClickShowMore}
              />) : null}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

StartScreen.propTypes = {
  promo: PropTypes.shape({
    genre: PropTypes.PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  }).isRequired,
  moviesList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  activeGenre: state.activeGenre,
  showMoviesCount: state.showMoviesCount
});

const mapDispatchToProps = (dispatch) => ({
  handlerMoviefilter(feature) {
    dispatch(ActionCreator.setFilterMovie(feature));
  },

  handlerOnClickShowMore(quantity) {
    dispatch(ActionCreator.addMoreMovies(quantity));
  }
});

export {StartScreen};
export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);

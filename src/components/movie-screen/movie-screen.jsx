import React from "react";
import PropTypes from "prop-types";
// import MovieList from "../movie-list/movie-list";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import Tab from "../tab/tab";
import Overview from "../tab-overview/tab-overview";
import Details from "../tab-details/tab-details";
import Reviews from "../tab-reviews/tab-reviews";

const MovieScreen = (props) => {
  const {moviesList, filmId, filmDetail} = props;
  const {filmInfo} = filmDetail;
  const {
    title,
    totalRating,
    countRatings,
    poster,
    cover,
    director,
    starring,
    release,
    genre,
    description,
  } = filmInfo;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={poster} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release.date}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
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
                <Link to={`/films/${filmId}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={cover} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs>
                <Tab
                  tabName={`Overview`}
                >
                  <Overview
                    totalRating={totalRating}
                    countRatings={countRatings}
                    director={director}
                    starring={starring}
                    description={description}
                  />
                </Tab>
                <Tab
                  tabName={`Details`}
                >
                  <Details />
                </Tab>
                <Tab
                  tabName={`Reviews`}
                >
                  <Reviews />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {/* <MovieList moviesList={moviesList} /> */}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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

MovieScreen.propTypes = {
  moviesList: PropTypes.array.isRequired,
  filmId: PropTypes.string,
  filmDetail: PropTypes.shape({
    id: PropTypes.number,
    reviews: PropTypes.array.isRequired,
    src: PropTypes.string,
    filmInfo: PropTypes.shape({
      title: PropTypes.string,
      alternativeTitle: PropTypes.string,
      totalRating: PropTypes.number,
      countRatings: PropTypes.number,
      poster: PropTypes.string,
      cover: PropTypes.string,
      director: PropTypes.string,
      writers: PropTypes.arrayOf(PropTypes.string),
      starring: PropTypes.arrayOf(PropTypes.string),
      release: PropTypes.shape({
        date: PropTypes.number
      }),
      runtime: PropTypes.number,
      genre: PropTypes.string,
      description: PropTypes.string,
      userDetails: PropTypes.shape({
        watchlist: PropTypes.bool
      })
    })
  })
};

export default MovieScreen;

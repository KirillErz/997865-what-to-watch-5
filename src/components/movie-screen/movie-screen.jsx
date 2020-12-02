import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import Tab from "../tab/tab";
import Overview from "../tab-overview/tab-overview";
import Details from "../tab-details/tab-details";
import Reviews from "../tab-reviews/tab-reviews";
import withTabs from "../../hocs/with-active-movie-card/with-tabs/with-tabs";
import {getMovie} from "../../store/reducers/selectors";
import {fetchFilm} from "../../store/api-actions";

const TabsWrapped = withTabs(Tabs);

const MovieScreen = (props) => {

  const {id, film, loadCurrentFilm} = props;


  useEffect(() => {
    loadCurrentFilm(id, film);
  }, [id]);

  if (!film) {
    return null;
  }

  const {name, background_image, rating, poster_image, scores_count, director, starring, description, genre, released} = film;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background_image} alt={name} />
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
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
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
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster_image} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsWrapped>
                <Tab
                  tabName={`Overview`}
                >
                  <Overview
                    totalRating={rating}
                    countRatings={scores_count}
                    director={director}
                    starring={starring}
                    description={description}
                  />
                </Tab>
                <Tab
                  tabName={`Details`}
                >
                  <Details
                  film={film}
                  />
                </Tab>
                <Tab
                  tabName={`Reviews`}
                >
                  <Reviews/>
                </Tab>
              </TabsWrapped>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {/* <MovieListLikeThis
          moviesList={moviesList}
          genre={genre}
          /> */}
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
  id: PropTypes.number,
  film: PropTypes.shape({
    name: PropTypes.string,
    background_image: PropTypes.string,
    rating: PropTypes.number,
    poster_image: PropTypes.string,
    scores_count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    description: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
  }),
  loadCurrentFilm: PropTypes.func
};

const mapStateToProps = (state) => ({
  film: getMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchFilm(id));
  },
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);



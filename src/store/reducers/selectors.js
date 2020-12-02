import {createSelector} from "reselect";
import {filterFilms} from "../../utils";

export const getMovies = (state) => state.DATA.moviesList;
export const getMovie = (state) => state.DATA.movie;
export const getPromoMovie = (state) => state.DATA.promoMovie;
export const getMoviesRendered = (state) => state.PROCESS.moviesRendered;
export const getActiveGenre = (state) => state.PROCESS.activeGenre;
// export const getReviews = (state) => state.DATA.reviews;
export const getGenres = (state) => state.PROCESS.genres;

export const getFilmsByGenre = createSelector(
    getMovies,
    getActiveGenre,
    (films, activeGenre) => filterFilms(films, activeGenre)
);


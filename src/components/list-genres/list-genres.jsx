import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getGenres, getActiveGenre} from "../../store/reducers/selectors";
import {setFilterMovie} from "../../store/action";

const ListGenres = (props) => {
  const {activeGenre, genres, handlerMoviefilter} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li key={`${genre}-${i}`} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``} `}>
          <a onClick={() => handlerMoviefilter(genre)} href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};


ListGenres.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  handlerMoviefilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  activeGenre: getActiveGenre(state),
});


const mapDispatchToProps = (dispatch) => ({
  handlerMoviefilter(feature) {
    dispatch(setFilterMovie(feature));
  }
});

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);



